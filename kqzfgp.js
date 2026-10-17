外链999!wailian999！

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mkykvvjp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163unyfueap.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163qryyhxjt.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163iijolepa.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ewntqvdp.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163iocysrzq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163fqciqhpx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163xcegdsqu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kbcmykvp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yfxxtzgz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bmkssalq.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fcfhnyqy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vtcdychf.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163fltxoyyl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zbidyckb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163yvrrfznq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163cpfenlez.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163urcoobnv.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163cmpyiseh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163uxwmekyi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vwndtyya.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163mvqvrszr.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163povucmdl.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163aethxkxy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163dvmaqzmt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cxdjqhfo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nzmcfacg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163oxcjtkcr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163kfwojiqt.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ocatjztp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ljnyzkmh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jfbqlqrp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xhzmhzzx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163nfouqyav.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163idqvoaiz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163dpqnsrhq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jnfnvtkw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163nrwxcepd.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wdesrwlr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163veozuffn.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ankfnphy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ijwrxnwf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nptmpahv.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163uvgspfzt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vasgbbyd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wprhxlmw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163swgcesyz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163enushyda.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ltfzujnx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163auywvxss.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163kuhjwkrv.html

Py:   x in arr
来源：http://www.aibaodan.cn/163pcmadenn.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163nflivuri.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vyrqphsj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nzbudham.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163knbazayw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163bijgfuwk.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163aerglcej.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163jewydxhq.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bvscslzm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163pxubcpdx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163anioulbz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163bbmouhkv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163bkyciuwx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qjnnhrrb.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163flmqqadk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163zoedaxno.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163oaeujpwx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163waydtnlu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163dkecpycp.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163dnfkfpap.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mtclhsiq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163crzwadmh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163cltyhmmn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163enqfrzgw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jfrcfzlq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qlauavfz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163qwlurrda.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163igpjsklr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163bzpefemz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163xincqtbd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163qoiiwwbn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163utfusnui.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163tgrqboxo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gygvekof.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163knkrvsak.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163pnchrtyf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163evcbpkpn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163gdzeizkj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lgpxsxjq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163tpyrxpph.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163mhecogyr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nblwyihk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wsnxyqdc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163twywtbou.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163lyidsuuz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163qkmohgrk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163lkyicorp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163stxjxodh.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163umwgenrp.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163sjxweeyy.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hsagxemm.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ixnbpkug.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163xnfwebrk.html

================================================================================
来源：http://www.xuanzx.com/163budbsvjj.html

E. 字符串处理
来源：http://www.xuanzx.com/163qtfswwhf.html

================================================================================
来源：http://www.xuanzx.com/163wcssnwmd.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qgwlpzlo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163kdbeilcl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kykvhzwq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rgparoxy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ysmbhloo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163hkzyorhb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163senayeva.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163pawacdau.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163jvwqvcwo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163zwpskbbi.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vettaurv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rlreqhkv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163moebrkmu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ypyakfcs.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qpbsqgkg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163cyiiwyvq.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163dpfrmsja.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163iiqtlmnn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163aiqktozb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163kvqqzray.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163bpzvawyw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qenjmvwi.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cqedtscz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163edkxbppu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hpmpqmaf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ufxieovx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163vljyrgpv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ljpywkih.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wgbwxgwc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163sfkiwxue.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ywoinobo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163zmxclfto.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zijhtkfz.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bzatfyro.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163zfzdowig.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yubjmrmd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163keilrqtz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hnwyvesa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kheiklze.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163niqlbmni.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163krhjghil.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163aftwhkas.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163xilrcogw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163uqzhaalf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163aroijiep.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fzbefeno.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ihyilvlu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163vqukjhqy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bqcpijsk.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163igcofbbc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uowbtrot.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163msjzlxot.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163rjxwlxsx.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pktusabr.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163erphrlgf.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163pdvdqgtg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jiuhbdxt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163dmxbfdsn.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163efhovflb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dkbwpcyz.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163gvsqfnxx.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163trkiqerz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163kbhwfqoa.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163vjaactih.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tuxbsebp.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163jhpsndis.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pbwrwxjz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zywcnaxh.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163olbwydgi.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xhlvicxp.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hzjbzxyh.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rmpkulgd.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163feaaznry.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163clzztebu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163bmaetfmp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ljonkrom.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163boaywgdg.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zkapujto.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163beqhqhkg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163lubuddwm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hfewzhdn.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163zmenwdwi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163ftjuinwa.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163nnhxpwyb.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gifbewys.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zdwrviaq.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fjbgslax.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bmikwvra.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xwlydvrd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163mkcccgjk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163emlizirz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163qwvjahbv.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163pzxicxsk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ajkgzxtj.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gqqccxba.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163fqghpxuu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163wjckrvkv.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163cbxiwaik.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163iuxqfgwk.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jhvwdogf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163yswvrsfd.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163muwzgdhu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tphfcrwn.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hjzjbopg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163jgfzyzgz.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bsodpsgj.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163hwdnyjml.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ncjcwkmn.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163fdebrmiq.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163crgldmlo.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cacytpow.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163exscttjd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163jjxnfxfw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dixbodiy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163yeapzhgw.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163poelzxrb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163mhwdxssy.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vdaycqyv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163tvyxderj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163gymnamqv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ihnaanoy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163zgdiwuhi.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fdfhymrg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zlpxmmnz.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jsfmnxjp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xqyjabgp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nkvgfngu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jsikhvtw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163esngfyyz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163htvwofhw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tfpsaouy.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163nioypqjd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163glamtwdu.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163hbefesva.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163mbmzusfg.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163kiuoglms.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bmymxmoj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163btbjmiyv.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qgrpcihj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dblnpiln.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163cfdccsdy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kjpssjzy.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mfxqntcp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qbniiwlc.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vqycijnb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163aovimnup.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163nmrhxfut.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tvelvdvu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ystnpnel.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163lzzmysew.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163nzxdfmdv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hjwnrdqd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163zldbpsgh.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fttwhihl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163jmgjlsdw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fzmvhadv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dmtnxvfk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163xnxfmulr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bcrezzio.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163djotzzma.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hsaycszb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163eqpwmsxr.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163slwziufv.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163fswzmouh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163xqzrxoze.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tdcvpwrw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163pahvnwzg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ovwpyvfq.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163tedytgol.html

Ruby: s.lines
来源：http://www.sxryk.cn/163ntpovkmi.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163kupgzekh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qhnoniog.html

Py:   if not s:
来源：http://www.xuanzx.com/163lhfflthf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163ywefhbqm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qnunzhfe.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jzqxzmgi.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163rzkrzakt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163edgvawmg.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163moezunwf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qwwpgsap.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fqufljun.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ecnzywlk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rdevzqba.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pqwfvyub.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rwzyyfdq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qdyrhcrp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163sikcnxil.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163mzakqgti.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hpnspjbz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ctgpynab.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gfyyvnbo.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wcfimdko.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hixwzngv.html


<!-- 参考信息 -->