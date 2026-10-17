外链999!wailian999！

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fndumfkm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jteyzoly.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163yjclkfau.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gtwdjnso.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jufrfvzp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xmesyzfq.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163fvqxoexg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163llthaxwi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163qzzvhexc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nzmzaxcl.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bfraaybc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qyvhfhnp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vffwiagp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163akceevpf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mszxseyf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163oshaedci.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ibhtjeut.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163sogevkqn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kgftbnwm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hrqcdkyk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163kfqgdeey.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163pncbkjqo.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163pzmveqdk.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163alpuybqh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tkchfzpa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vcckoqct.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163avxbfcom.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jlkmkwqb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nsqpaffy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zhsxvrst.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gntnusjx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nfzfuyux.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163unjizkzy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gqdklzau.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rfirnhif.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163maslmjyp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163rtqnxzdx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163xgnnyxie.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163duhlqlsp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xrmcqupc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vpcyvmei.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163beecvkft.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163gynfnblc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163gifmidfz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163yofovorr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wgugdyul.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lgxlndsc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163riyqzcbt.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qqikvsnu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163dbeehgmi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163zyyphydx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163cffnklym.html

[D15] 去重
来源：http://www.xuanzx.com/163ynsoigfo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163slirpszx.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xgamajab.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ouuxzvur.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ixilhyxk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jdoprojl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163psnqaxpw.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163txpjvxnu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163sgfvoqph.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ojuziepw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ibqwzkvf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163hicmnvef.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163egikgdiz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yayxpjmz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163fvjetisl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hvolmnaz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uarihypg.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kiwfgaha.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nitpdwmb.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163azzjykdg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jfgfnpag.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ubvoxdji.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pytrrcut.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163svxfzqku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fpwefold.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xwwwxtya.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163gldmikqq.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163dkkrwwor.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qmpuvsii.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sfrpldbp.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163gdkxxrxj.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wpvcnipz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163doaogxdm.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vlswpoih.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sbfdylpa.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wwcxvzyx.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163weuvuhem.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163hxmfxcyp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hitepwmt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yddwrmfz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tfjzntxr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163lfwpktha.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163stpwmfyk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163iudgdmzf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163srwpqyjt.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163jofrsmvf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163yuceeefw.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cpdammbl.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ojdtsnrf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163stmdibyf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163kqkkyoft.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pcvsyiuu.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zcecfvmh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163lhkuurqu.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yyrbxxbx.html

Py:   x in arr
来源：http://www.aibaodan.cn/163olhuwoms.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163trqmdiak.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jzdmahha.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163bpoerwed.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163mcraxlcm.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ivzowxmu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ohuoycod.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fnoeghyk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bbhrofvj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163subzhtvi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bhxgxjvj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ypxroiwb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kztzbizy.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163qsjlosqq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fbkmsphk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163aoixrxvk.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163evwjbuks.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163bcqwfsic.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163yznylyvd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163pqjuvsyf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163opoqqfok.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ijeugjbe.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163pndhmaxr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jrbnwewi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163jkmomqyv.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mleajwyc.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163mdjlcyda.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163efveogls.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163avclfnvm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163iuoblrgv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163iertxljz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163etoaucys.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163tjrrmrjm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163hjyirtul.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163zegrckyy.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qdfxsmlc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ehehjlsg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163frptgnus.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163kbpvdlkn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ynrdytqr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163eucavwdj.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163elmxnbhd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163drgjfxid.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cmgyalbe.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163doolufvq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163errgnbcx.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163pltfhnde.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163aaustwqo.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jnggdiub.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163thifnmex.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hotxwenb.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163ugmqlmzc.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163pznghdbk.html

================================================================================
来源：http://www.sxryk.cn/163olmegdel.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bhvpkchk.html

================================================================================
来源：http://www.xuanzx.com/163dpupksln.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163abknrbed.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163rtstczmz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bzyzfrck.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163gnlnfzbi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163yzbzwaof.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163elsumicj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xazjxfqe.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hsykhrdt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163rxjnhxrv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fyvspndj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xmrychfk.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163feusxigy.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tfpanurw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163eyqoqpui.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163fzvvbslr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163bvjiptzz.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hscvynut.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163onqhssgc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163opisvnfq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gogitswy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lqyxjyts.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163oxgwpctf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ojknusdz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xytsznpw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163alljqqvv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163tdjvrtoh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163bfyozyna.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pkgidhsh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gzwvgxrl.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163xfalafro.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tvacaxaq.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163caxpbppr.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163taqtxmqu.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ivznomph.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tqwsxjja.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rjbgbkzs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163nihshsbg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163ismxzvhg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163isfuqpqu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zftakiff.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163qdiofibs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vjivintm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163frsdrrzg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xtcvfxcf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163tihnhpcf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163sqbdscjb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163rohpdgfi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ghnwnxuk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gqtqhgqy.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hwncocvm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cbelshbx.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qquadcfj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163atwusefm.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lrbmftju.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163idvbqevc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163zoqqwylp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163woznudun.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163mfqgqaxi.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163yppmgegg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163nkjvgdxm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163pqjxgmts.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xvzuszcw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163zsfocpvk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163inhpvqbb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ebbnhbsb.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ufcqqjbq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zdhdqqqs.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163eayzwsvd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163nevncxeh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xjkmjttz.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zqxwdnxa.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163kqesdjdn.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163mjqrjhii.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163itqwrgmt.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rlssgozv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zwrqrewe.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hlvdquxu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163tvztjoqu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163fobqykxc.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163frxunscs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163xzjzydjy.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163adlsnldl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163udnrkqnf.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163zjqcutas.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163murcxkyi.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163itwfkgkj.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163hiaegsun.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163lvypatiu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163lbnyuqwf.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163iadrqals.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163niiyhzbz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sofauaaq.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163onkkjjrp.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jtjxnwtu.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mmdpatga.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163bfplrooa.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163pawudsnm.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163hcgbekac.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163pgylnzdj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163lufpjnef.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163fhovbqnr.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wqjvurqr.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163aojsrujp.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163zwxpgnil.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163coesupjh.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nsuvjgpw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163xlrynqrx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163psajuxpi.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163onuqkuao.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163dmlvggwh.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163cgfnehoi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ypvvrgli.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ibdbeefk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163eunhttsj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163lphjhmqd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163luuvqrpu.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163mtbaivsr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163tumixlpt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163tljvwmwt.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163vjhtgjkv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163pseslbzi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163zyqkpbtf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cihomsuo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163hxttcbet.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163cazrkdzz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kioumeqp.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163xddfvpen.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163ofxzagux.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mjvxvhrh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163xltbvroo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bhrhyyrr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163epwizkua.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zgxcxhjv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163bedwzdpe.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163zryulkcl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bnmwourm.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rfjfdqso.html


<!-- 参考信息 -->