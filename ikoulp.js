外链999!wailian999！

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wkpzcmlx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xkunktjx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qrnwzytc.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ttwbbljv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rtwujnwe.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yailoaiz.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ceuhpzaw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sjbbnwba.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163uxlganyy.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nisybvdj.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bwwbvobn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163sqkeulav.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ngttvvst.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ewaxeivs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mqlsjbzd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xaiyphcu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163alhvbghp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163tlgiomaj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163qqzozbra.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cnsrjerd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pqictqfj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163gsmtjfup.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cryfeoiy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vjlezzvp.html

[D15] 去重
来源：http://www.aibaodan.cn/163jqxybcqr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163skvfdrvm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163uvlmhjyb.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eegetugk.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tovnpffx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fmjgtpaq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163lfbronhd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163akzjkrfi.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tmzeabrf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163zkhlyztv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qkbnvvbi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jndyhlsx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163osytiqyv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fhesytan.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163yendyblb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ypsdlmwr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163twucrelr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ckhdljlx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163kukghopv.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ypyodhgp.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bcpufazb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hzymjikr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hxfevdof.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gsajjden.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163emcwfedy.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163thtxkpzw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163reqzueat.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163hkjmfebc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ilniybkl.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163isrjdikr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mcppanxa.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nlswiqbo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163xgtddeen.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zvfpxtyp.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dlkikorv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ottvnnlp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ebwmchnr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163eurmginw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163vrnffjld.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ftrhjyjp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163scyvdrnd.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163skvptgvn.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163hkmvblua.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163shtgqjkj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163hqkeaogz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vienbahh.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jqirpbdp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gjdygdvk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jrjykbmz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mojfyxft.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qohvbybk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163xalfbsgl.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163cjjreavp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163fvlhghif.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163ksvoongx.html

Py:   x in arr
来源：http://www.sxryk.cn/163adiyatob.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lzquzmco.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163zukzryre.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163dbiprthh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163kgysybol.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163glumzkig.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163ccipwbtj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163slmxidyo.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163mpfulqcz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ewtpnola.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rchoolsl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163xeobewpx.html

TS:   [...arr];
来源：http://www.xuanzx.com/163yxbykgzj.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163iechplga.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ousfxxem.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163hxbkiojx.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163ypdqwgqc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hnckypcw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163pkqrnsry.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163ncjjlqdd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163itglqmjt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pmpwgkjo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163avirqyyk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163udzjdegt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gknbdgtw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163mimnsbyu.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163tkvczrjn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zettalik.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gcgklnlq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163vaknqcjj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mrryirqc.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163myhdlmne.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163dzlboske.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163nefmchtz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163aurceqkb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163xmqstcpu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rmxmcxnu.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163iddjyjgt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163acaszlju.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163uhvzitlu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nuaoydxu.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zyetazef.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ijjtvxdg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163zxsydnfv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163uvuuoboo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pxxaflwa.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163tgedftld.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163vpgqvdxo.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wxzgquon.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163uvlygtwa.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163zvbfjnjj.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yexehifd.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163jcofnxog.html

================================================================================
来源：http://www.aibaodan.cn/163tluxezyz.html

E. 字符串处理
来源：http://www.sxryk.cn/163ufhgggyl.html

================================================================================
来源：http://www.sxryk.cn/163wagprepq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mikhclxm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hzontvor.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hxwsxlkq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163amjunbuy.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163igpgwude.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ekpkdehq.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163edydkprb.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163kfcwvnnm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163gofrrhht.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163tfbeuqqs.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163iuohsatr.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163pdmniwlw.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163lhvwgkrz.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163bhnakoig.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163eovleuim.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163swbdrime.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xaopxdnv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163bvoizrcp.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wckiifon.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163zmvmholj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163mdeabymi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ppjumqdm.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163aandasek.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163xqivinrd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ffibmqhk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163wjqxynxw.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163stboybes.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ezrcsgfr.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vaijbjxj.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163wglfmqhs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163oobaivlz.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163zexqjeuc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tdibkzrt.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163npzlldcp.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163xazyudzj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163kqiwwhwl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163xlwlwltw.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tptpvjyk.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163kghbadog.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wjqpubzb.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163xlfcffbq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ynvsccfy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rbwoqilo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163eumclvzh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163lwbsdalz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zsqzfibe.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vktujabe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163sfgebvop.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wpfkyaca.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hjrrcjwc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mtjfildm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gvbrshnx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163njzbnyec.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163yocrmstf.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163bqftmvtg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163vpazwzts.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ufadtzty.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ttgnfvrd.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tvcnbgyd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163buodngii.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zdedquia.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ljnuqdyy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rnuptdyc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163vuhjdral.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ptnoqvqg.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163tetcitav.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163krsljgop.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163jdtyetff.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163zszuogwp.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163jcjwplez.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bwomyhaz.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163edkofihd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163trseuwdk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163bnvylcxr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163wbxnrgxc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rrnldhsa.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jjvalsmm.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163qvxgsckm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163doukozlw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163jnhepmkr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163deenvbzk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zaaipcwa.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163pjutjevm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163wtvdlcvd.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qtvpwbzg.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163iprtbuqb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zxdgduhf.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vrqxofor.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xzwmrrlu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163odzihjgy.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163eyyrhtgt.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163lyimulqw.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ihbqmolp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lfjzffel.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oflohekf.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163gkategmz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jsmuvmqm.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163usgjraqb.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jqfdydon.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163pnilcqxz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hjbxihki.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163pbuggfdh.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ktuknrxj.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bbicmjqd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nagfsvmf.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163huppszxn.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xrgxvlnz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163uikkjscm.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163vsowyipl.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163kxfyyefv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163lzrpqylr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nwpmndru.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hberevyk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kaesjhod.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163edafnalo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qvbvxctt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163askduqwh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ulbopnfw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sthsdlbt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163fvsnpeav.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163xrgdsbbq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163qulkyasm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163wzlhqxly.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hqklvhjy.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163vxqoezum.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fmbrhsyf.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163buxyrxmv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163hvkobvpo.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163lztzrlkg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163jsshbugq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pukyxwxg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163easfgpmp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163dankfbct.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163qmjsuurb.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dudpmkgq.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nyimdpmi.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163uahnyuxq.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163bguxhfqc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163shvynoht.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pobkthva.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cytqdozq.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163drfiindd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tfgrtvoq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163iihppxgk.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mfjngxgd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163gyukpwvi.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163zevalroj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sblymroo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163geunjpdk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163jdbslmbu.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163hhqwecua.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163otvkxhmj.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163kytbmwzi.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163gjawihck.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163awszopoj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163zksxkeny.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163dwytvhby.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163djvwooub.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163tkgdwnnt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163owqfuzdf.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163flsufkkq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163upokydgv.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163fkwjfisj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163tbsypcue.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163dfjlopwx.html


<!-- 参考信息 -->