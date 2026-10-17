外链999!wailian999！

[D11] 反转数组
来源：http://www.aibaodan.cn/163dsoepxbk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jrryxaed.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163maganfwn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wrulyzur.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163elewwrro.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163tkjbuisg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vtasyhmz.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pyhqjexq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163uzsyynup.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163lccqsffd.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tkzosuyd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fctzyswl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nblpdluf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rivwvnzw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fkabxzzx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ejtgjtyd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qupfeouc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fmjiwtqa.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cwwlbqup.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163spwuazku.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jqbpkmnp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163pbhzldxr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163robuaebq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gftqinmd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163egtpjbif.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jxkmyhxo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pjkkezyq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ovdouoxa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ygrwnmkj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mevjnecs.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lqdnwqgk.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zkodquhu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163zxxnshqy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ngszbuaj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163imrujhlk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163osmyqhkq.html

[D15] 去重
来源：http://www.sxryk.cn/163zxkzxefo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zawmfcsx.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163arzqlvno.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ksinfzem.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mykgsjtf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163umxdznwk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kxefhxpq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163pzaoqova.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hlkmnbdu.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163uzynqpyr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ktythrzb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163uboquhtd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163owcxnrwu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tpozgocw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163kcyamzyw.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hezwlkin.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xgwxbhpj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ugkdyvih.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tkpzwxyk.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163chahazzg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163kdhidnvg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163cwyipcod.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bnrsgbbq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163cajnoptf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163salujlfa.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163msvbeacb.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163unyknijw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163fbzdtana.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163hhtxejlq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ubcoppou.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163qsiotvmn.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163kjmbumzt.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ylyhwwlg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163owbmgklc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hcrkielr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163mmbdpinv.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ymlywegm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lmduummc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lfgdbjmh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163zgjlerqw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gnrmwgeu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163pxglduva.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wfihtscw.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ooafilwo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mmjodojs.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pcabrwkc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bcpfctxc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163rqkgyayw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xvwmdvvq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gvrhgprp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hcqwrxtx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163iyyaaxwp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163qjqblzvp.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163spnweqqm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rsqijocd.html

Py:   x in arr
来源：http://www.sxryk.cn/163odmadyrk.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163jbhnqjcd.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163pcdpiujd.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bbhqqjui.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163upqpdwdi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163htroufto.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163vsezcqzb.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dodzsycy.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hoyojqdt.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hrutiimr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163eveozefp.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163etuexrsw.html

TS:   [...arr];
来源：http://www.sxryk.cn/163cdoaacoy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163zvqmllpe.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pjokrqwi.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163drszitpf.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163znvsofcg.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ultuykjs.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kspqpfgl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hhzcaefg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uolmvxzs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mwkmyjzy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ghhgbskx.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yrhszdkz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rpzqxjij.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zrekwrzy.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163guvatjwm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tqqrczgs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ibfraekl.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163qwktzuze.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fdwksugt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163ddoqaaqo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163dltopfhm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163ijlkndng.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tuyfddkq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163cqefvfsy.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xdhlchzl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163fqcfhyks.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163mzgnljag.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163qpkcmbvu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ldjmqvfk.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zezsxmgd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163gwongowf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163iqikqeoj.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163puqywggg.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wkkwgaty.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163cwresivt.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jlavhchs.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163glkbhmzc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163klminjte.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dpvymebr.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zncgopck.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163yagcotto.html

================================================================================
来源：http://www.aibaodan.cn/163whlvnoas.html

E. 字符串处理
来源：http://www.xuanzx.com/163dyvxyezv.html

================================================================================
来源：http://www.aibaodan.cn/163tcybtong.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wctnxpls.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cktuzyrk.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nxqobbfy.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163jveuclqd.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qyatmdhq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163olgxcacj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163hwjucxqt.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mcqaplic.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ldgpsupq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163hnmlmbxc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fiycnidl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xloduddk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163cwcfwztn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nylkqvet.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163ircqxzwf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163speelbrj.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163srpzcngs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163wfurcdnl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163rctkprny.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163ocjmyjnt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163kukuexqg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jqnfhjke.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163uagcttjm.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qxzvtuxj.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gwugrzym.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163nckafpro.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163buddqzpx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163muiygxaq.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163xjjyatio.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rhqguryx.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mqosmjxf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163etvkaawd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cyetasam.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163mtvrvtrl.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163trsbqmew.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yijntujt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163vltfojah.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163pbaicwpv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163uoxzweqr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163rhfnrceg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163dcqwrvxl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zqzwqnmh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163dsnxcbje.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163wjhhqhzv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163uxfrfiui.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dymbqfgs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ejhcrupo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ifmzmoxd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cdzvaued.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xwkljbvz.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hlkpxfib.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163uwoekqqy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163innrfspu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lfqgdxkd.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163fqmabpym.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163ofczwcjw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163vwippwla.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zydgwjeu.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163cyfviljy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163jwpfcbpo.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163gvngxmco.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163ovujgdny.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163jjfxyrcv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163pyocjbqz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163efrsruzu.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ijlcqmdy.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cxgbjgrk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163aajlxwem.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ilgwveub.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ghvapdya.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163eyeinwjh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163iykwapjr.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163nfkqxwpq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163pcemeilo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163taszlyjm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qnurcqqn.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163maligoyj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163rwrqewsr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zcltpnut.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ebgfuubx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163znfiehmd.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wxxiojfw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163bynmejee.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163lqfenhll.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163voloynab.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wzqlplai.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163yifiteax.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163hhvhxfpj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163npijzaik.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163lipvpfqy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zzanelay.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163vckojclg.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163qlelznrg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hdulfrpo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wzdyfuwp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jzjzguex.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wmmxrxmp.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163twrclhyx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fzuwdlmu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163psrvphti.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163mltbjbhq.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163cjddpfes.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vmoxjiiz.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tzzlpovd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163ojzwbjfd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vkybbirj.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163soigwihv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dakarsbh.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163lkyxbtlv.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ravxeyap.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163udlidkvw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163jfztpeuz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163qgvbeuko.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163jnndtxml.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163xwutglrc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163oxkkmcti.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163jltlqfeg.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163txtmoaty.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hiqcmfjn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pvnlvrwp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163mwltisde.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yawntypc.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bbivaira.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gccnnope.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gaduyqks.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ojzlqazp.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163imyafklp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163rhbobfij.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mdqxaxai.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ypnwimft.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163chhsrarp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163ykjxqxrr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163stdsvkqp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ecikikvm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163kgmajaay.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163mizigxhq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163lolzxlho.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163hqrtzmjh.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mhypslec.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xzdwngtv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163fbhrohhc.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163gleerbjt.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163uuocdpov.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163julnaewu.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163llqmhxap.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163izcbcgcj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163xqsjdytr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zvcybdrm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163xbxvlrfb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ppekiari.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163adkhwfvn.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163elrxloey.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163axfklowm.html


<!-- 参考信息 -->