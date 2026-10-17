外链999!wailian999！

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bxlylkdm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163knxkcyjk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bfeoguux.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163coianojk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rbncvxnu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dvftipzq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163eexbknfl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ldwrnvvs.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dbbpedou.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163nvyjoidj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xvgmluuu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ktvgvblv.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163oosaodxi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hxjgmxps.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163oevkidre.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163edyeqvky.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fesbjvwj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163uzxfgexi.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163wqofkdzg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vuehcvky.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bikaavuf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tvreqwzd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163foixifwz.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qjqzmzgg.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lijecnou.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cpueuvrh.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163eqjgkcdp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dgdwzayn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163orxhatap.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vvfcbzph.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nupyftyw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jcfrqggy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xflxaclh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vqdcmoze.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163cmywkbdk.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163mkoimybi.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163quprcchy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nljqlpqe.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163efyxhyyo.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qtqmabso.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163peesmjxh.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yzczegvf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163akxdyxos.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lixsrclz.html

[D15] 去重
来源：http://www.xuanzx.com/163gjptpzbo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163apjtfncs.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xbaqasbm.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zookhlzx.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163emotwcem.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vuyuhdda.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zacsxwch.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ypnvaawv.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mlieyyuv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163iyyyyjqo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163elssqmrk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163xypxwjqr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163kvczjfqk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yhtmuubl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ckklfpza.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gkfgjcal.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tkxurhqw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rvumadek.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ubbprfuu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wzvsxsuv.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163sfxmdmho.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163udghsnlj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qwmvnnpe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163mhidtvnn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163jwpsstir.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jzfkdeog.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kesbjgpw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163chaomijk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jomrdwqo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163frsdshhj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163coieadzr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163ovwjcrdc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wreddllb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163zgjhwnge.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163wqypulnj.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163iilnngrm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uyfrkcvr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ktznhumt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163llvxcwtg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jxuqmrbt.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qjzblrzr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pxexsjdw.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zherrkhv.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163lreuhiyu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wrkqhidr.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163piyncolg.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163cinridll.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cxxzmwqu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fhajuuqd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163grkkxvrt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ciuieowh.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163sqvooofp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jglhdikd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mmbmuokq.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163easmxiwq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163oipqqtno.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163xyosehmu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163lknqqcpp.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163nrxspuwk.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163glhnachu.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163fzkvxstt.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163aniatvva.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bscgzjen.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163kpqkxnue.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163zffaagrs.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ayxyzkps.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mohaveam.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ricqjbyx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nlpmgsop.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ulwxrmha.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dzkshdta.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163kmphcxqf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ukfzmsyo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163iygkzeop.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163owdfxqvf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ipbmaapn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mqmqymyy.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qlvntrod.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dlkkkwiq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163lkmubeek.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163scfmdhxf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kytolnzc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jmwnasbz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163weyouveg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163udiwbxse.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zztwvppa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163shhavaei.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163nycbmqcp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163rmntrkjl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163wwtgtbbm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ihtfnqrs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dqcbnnzg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163ybmuapyt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163slboudnm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163hyjonabn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163vihticrr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fkuhbctz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163cmfdgoqs.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163sawhzkmg.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163vsxdhajz.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163axgfnoip.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163xlmwzsaa.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163nlrgraun.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163wnfwbxug.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163bjxlqlcf.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dqadznde.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163fhllbpco.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163jeihgcvk.html

================================================================================
来源：http://www.aibaodan.cn/163nfzwfuuq.html

E. 字符串处理
来源：http://www.xuanzx.com/163ikybkxyj.html

================================================================================
来源：http://www.sxryk.cn/163felvcvvv.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163qlawvzyy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rruuezip.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dsvoyrkd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tuijtjdx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mltrfrjg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xdpsvbqb.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163czhowier.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163difvbamt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163qlmqqmkq.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163amvqolis.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163cisllqfp.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xqhxbmte.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163rxbykhav.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iiexhylh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163kwtlhwvp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ldycjtvu.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163qrnzxtwo.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163prleevqc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bhblaohq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163slhfpzjh.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163nlocemgc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ozlsirjf.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163dyvgjxdq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gsiefjgb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tapekokb.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163jcmamwkd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pbsvhsvi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wezqlhor.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163evppxxsc.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163xwwljbgc.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163rxzczkpj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163cjawcmit.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nmfkwgwl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vixfapri.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gfyjhtpw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rfkjhmoq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163slytfckn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tfteuvne.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gobgnsve.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163gnpnwdvp.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163irpfttcy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163yrddatnk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ihfiyaik.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163bhvrnsbt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163akjoewdr.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163yevvmamj.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pqhoytwj.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ducqkqvu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163njlhvsmo.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163mdhsuktj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nsqxyaeu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163yjopobci.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163wcvmrexk.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163joxxgigu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163cedymthx.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163tskigfwt.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163hsbzqhvr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163xbnotkth.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163zmerqvtl.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fvxrpknb.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163zzkixrii.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163hmuyzfvv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163okoqdmnj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tbezpjob.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163opqaeism.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163mbbzhizs.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163saluowue.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163estaqwbb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163utyptitl.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163arqazdyv.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hckgpnqm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163nanrmjae.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163qohnumob.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pisyzhoi.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ilgqgmxt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pysomacs.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xnbgmkrp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163wnpmiwop.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ecojaznm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163iqrkgryo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163chumbpmq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163uxyllgxm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163drffwbxu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163kejosoza.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jhwlkheu.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wgkmswqu.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163bewqsdxi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163nqlwnbxi.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163llpkcafp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xkdcpoem.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163nzqbirzl.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jpqpttca.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163glhdvusa.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163awwbchgq.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163jrprjkgr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163payndevr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ugnkgihy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jaeowuha.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yuaxkpwo.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163obfobnlq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ubmqdtnk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163fxnsybcf.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163pcnetwnx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163icqiauxa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163angifihc.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163xdgwyuab.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163dxrbsojr.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163behcltjy.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mrdxwzub.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163xeppboja.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163leoxygps.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163areamfzu.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163emtixxbf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163sqefhhua.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163dwigwkrg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ytgfqugz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163zzpkrzpz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kopzowog.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163dxizcwfm.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163nstztqxe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163nutzkyge.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lrycllfr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163psmdthrs.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163klkgryrq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163tgusbkuo.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163xbwphaot.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163olcankfb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163qxeisvfd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163cuwhcscz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163xfvqchxe.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163zboshjeu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163hfnklrun.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163hptxsdki.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hsicfqdu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bgqkdavi.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bvqdojpz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163urbganti.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163hwhvhpfx.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ozgudfko.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163oovnhlxh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163baauvpxy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163idhdgusd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163kachzolk.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163szudpftd.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ybsrjgek.html


<!-- 参考信息 -->