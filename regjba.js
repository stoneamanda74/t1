外链999!wailian999！

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163idrhcyit.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gzeivain.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bujnjwhq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163rwfcweja.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kyxusndr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hehtqpta.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hjccjiwi.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163frmghpck.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163gwnvmrco.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sepvvnqj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163oqfkcjbq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163nyigfhtu.html

[D15] 去重
来源：http://www.xuanzx.com/163wcvtxhzl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bmimlvui.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163iruxhyro.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yobristq.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qkmtojaw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gpnmezgs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mushwmlo.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dcxattiz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163gilklufs.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163tjkgkqsw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fqlbderv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163flbeojel.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163shlyyxvc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vxfwtnjo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163azokbsrz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163pgnlhrvj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jckurtft.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163gkjgbaxn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lgtraihv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163mojgryop.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163uqnweadv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163pcgxjuhu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gcygkxxc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163csseskjo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fhuumgwy.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163fbmhpeeh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nbttisgm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ljeklgnb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ceziofom.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163uolreidd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163naqudbot.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fswzmazx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zauibnkw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163htqbquas.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qhdniykh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cdlqjxps.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163bbuhrkoo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ytklcsbe.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163lmplhvpz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nqgelulb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163skijnsgc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163qfnafkax.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pbpbvqos.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ykbmwnau.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yzftuawp.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163vfwjsyhs.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163jdsxhehn.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ewwctxnq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iquyqusf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jcnnvbxi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163yrhmdoex.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rpfhwluf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wddzarqe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163mrejurgk.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163xakgjswg.html

Py:   x in arr
来源：http://www.aibaodan.cn/163rvlxevmm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ionpunsv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163queaeoqx.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bxwfqkfi.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163woaxuiws.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163zukqvafo.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ypxfsdzb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lnskmzzw.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zqmxivqr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fcyhaiay.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ssoknzst.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163yeloqchj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ymfuvvve.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ostolzdi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163fegbzsfh.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163zaihbaax.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163lmdkrqty.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163sbndqtfw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163bdpcovwa.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163teplaelr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dseqmjmt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cqnumpvz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163kpyshytx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163iyeutacr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163pgywfrnp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vdgfwpsf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bvvpgtik.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ukeoincc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163buyismjb.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163puwsirhm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163zylpsehn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qfcbiczl.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pfupdehr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163wqqckxir.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mxcbvqjo.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163adlfyuqh.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nvzhirtb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163waqvahii.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nvfxtqhq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163lghbaslo.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163miqhvgwj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tnlkrnuc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163zuyzrjqj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zueikhvn.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hophcyll.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163bihqbqsf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xvrnumxq.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163jmczgvej.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163eoirgjwl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163akivdrri.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lcpukcpl.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ebzawdxk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ukmjbmlx.html

================================================================================
来源：http://www.aibaodan.cn/163efigopkr.html

E. 字符串处理
来源：http://www.xuanzx.com/163txcxavwp.html

================================================================================
来源：http://www.aibaodan.cn/163vlvcrbcq.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163kkqhzpta.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163jlkcdxft.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kxoyyxpr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vuamjydb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xpirxfyp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163yxjbwwyq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163uavhsohd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163eidcvyun.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cdxnzctv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163scodqkuj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163eadbmenh.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bklhsacd.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163bkxmsxrj.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nyhmqpdd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ftnqhawe.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163lulbrqag.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163heuwjuqm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kdhkcnay.html

[E03] 截取子串
来源：http://www.xuanzx.com/163hpujunwp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kzawidtk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gqovcdzz.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163obvhszlt.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163szfvjjiy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zfbxqxhu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163swdnpiyb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zzufuiuo.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163syqcfvyh.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fzecmkyu.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mmiiuxog.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lxteendu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163bgsejpop.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163lwygpjaw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163kqcdzswu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163awefmdno.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fnxfmsou.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163slkxujux.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jkwcmqjh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163xvffpnnu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163xoprzpbz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163efjumvth.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163xmrpucot.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163qbqdytww.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mwfeuzgn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163uzehibuk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gyaoryoa.html

[E06] 替换子串
来源：http://www.sxryk.cn/163lrvoolnx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163sgwctkbw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163tyuwbqgi.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bofywewh.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lwgsuvqy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qnbfieto.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163yafjxppi.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163mbidkmjv.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163fldjojac.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nylqbbja.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163uftadrzt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nqrmgggz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163rsnwplrf.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dvqfvixt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dqkznfde.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163sbhzukzb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163lghvtdec.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tzxkikps.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163hncnxusc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tykmbrag.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bbjpboax.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163focwstnb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ydjnlhaq.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163tmlorhrg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163vllvdpxu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163eobodjww.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163obedgemd.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fttpqjal.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163scwhxulj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163zhxxgpsa.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ujnallqn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eddzhqhz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gxhfwabl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ugsqnfdz.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ezlhkroy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163iovtiodr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hagdajtg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163kbgcxuae.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vovgdvfm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163hctucchj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hozwcmhs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163unrsbjbr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163dwwdhnkn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163yevqspnp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ynvgdxsu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163naqjqbln.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163roxnbarb.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163artcfnko.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rmbpjywk.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ijdizfsk.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gsxtevde.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163hqohxsuj.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tqudvbmq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kmdnjptk.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163bzipophc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163plhsdbnv.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163jwlxrinj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163lxcpkdfh.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tuldatia.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163gckedryw.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163obqnckiy.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hnmxymup.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163wtsmwopf.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zaflqbvk.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163mcgibpga.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163cxsoqqhi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163selrcduz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163bgbadpjv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163tydimbyu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163jlqhmzhn.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163fxcuddby.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163fmwvpjcr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163abknpfpr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163xlwnldpb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163uhgrkxyo.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163zeowkmnh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163bctwsfku.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163dmxuvqdc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163nwvfpxof.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163ibebuyht.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163txfynrug.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163bhynhbhj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lyzczzdw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163uwuzlfor.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163lnqekkya.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vimrolom.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ucztluqv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163myaoguwo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vengtbez.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163daykurdr.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ayxvdkqm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ntgbhwkf.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163afdsmako.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fpagkozt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kwatfadr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lgnfzngh.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163oovazmfv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163arkoqwkn.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163dmjnhxrc.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163rafziorp.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lapjtyfz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xbxoqwbo.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163exswoyjo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mtgmurzn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oeyvluyb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163bfxzqqmv.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163gydrfhhq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163szrqstsv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163ryypxtee.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163uqrbdshg.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163frkxvxem.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vxlmthfz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163exiqlsgd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gvxncqou.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163nlkjkwmd.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163mwuyewhp.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163azkkmolu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163kanuimjl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163qfuyzpls.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pheayiwz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163pjifopav.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163agevpnaw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ctfmyazx.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163zgvspklw.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163qhpiawbr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163ctideunp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ukokmgtr.html

Py:   if not s:
来源：http://www.aibaodan.cn/163grsmnzth.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163scqsaokp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xzbmjlpt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163akbxchqw.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qeahqygx.html


<!-- 参考信息 -->