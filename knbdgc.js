外链999!wailian999！

Py:   len(arr)
来源：http://www.sxryk.cn/163liloxmur.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cayxtvyl.html

JS:   arr.length
来源：http://www.aibaodan.cn/163zdesjvex.html

TS:   arr.length
来源：http://www.sxryk.cn/163bpdevada.html

Java: list.size();
来源：http://www.xuanzx.com/163qtvuxgxn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163djkutxgc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ippcyeti.html

C#:   list.Count;
来源：http://www.xuanzx.com/163aonojiap.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xczxybot.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163uloodzyn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uqfcenjz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cwastzpz.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nkllfhap.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163flpeqdgg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nyvoomyq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163kipehwyr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163khtrvptg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gynrbzic.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163kzyxqgwq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cgvivkeg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163efgqahsm.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rvcgxqzc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163iwvnyohx.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zpsemgds.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lftcahyu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163krwlzmwd.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vfrikwdx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zwcbgzty.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163hyhlgnxd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ckrljbmq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bilwqsdg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ecwomilz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zcwresst.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163zhluzasw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ieeebjzs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163yxkggusr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jzueaofc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oacnvzom.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vxfkiuag.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163suhdzpeu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hlrvbbpu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163zyndiyuz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163uuhaxtky.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163bynfnlsw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cjxnxxtu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163siovsnkk.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163tcrexocj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kxqsfmej.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fryfimql.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163dibrsrem.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yoycoocg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ebwkqzdy.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vycjyojr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163slzdjzni.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mlrkfidh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mefcvmsj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qflwmcxs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163djbqywjj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163crjwwnxw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hdancbjr.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rtpnfeuj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163scozfwgj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qkbozgdm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xbihzqjx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hqyrjfno.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163lfrcahru.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tsgufnyr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163bguzxayj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lbakethj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hmjjqktt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163phkiaelc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ncjnpxzg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163fkpulebd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163qbmtjbjs.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wqmndeyh.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163crzbclir.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qughqjmf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163pubpsiiw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163pcvebgvp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163narbcikh.html

[D15] 去重
来源：http://www.aibaodan.cn/163luidtdoz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yybvhqqq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163kznexgwu.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163irtsvovd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163uwhkojsc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163lfknkvsp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ooprdrpd.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vyprpxvq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163inumqyap.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lhllfrzm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163biniztgu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163fyngdgca.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163njovelak.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163iwfwehdd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qnvgzimn.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163dypelkbk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lhosqrcn.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163qbtmmiht.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qrvcizay.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163agamcmis.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rkzxotdx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ymqwthxa.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hqbnpqst.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163vwtkiwfz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163icszoesl.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163bqlcqiht.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163jpzpczor.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163xnrsplsk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gcbmsnsx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ozxhzthn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mcldpfjc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fhiwtwkc.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163soxaxuhh.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163hskfsrxy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ztmtstft.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wpsmwxxg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163whbtosmx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163huceaanr.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bqetyxyg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mwqtqdvc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163kyghibnx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ixruedkw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163dabjkvdc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163paxunyms.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163gwdesqte.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qwleitqi.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ezphmnei.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163enwsezdm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ceqholyg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163iaztbhef.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163pwurqpak.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163hxxpzgww.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nyivbmms.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163dbvyrrme.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yljzycgg.html

Py:   x in arr
来源：http://www.sxryk.cn/163rybjybmq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163xhxqpkhz.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163vzinzcuc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163hrzyrgqm.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rztpmizz.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vabektjr.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163siwdqell.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ygnaxfbx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wzgwzjkp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ohxvstmi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163yiubfbxj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163yvcngpnf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163girxnbrp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163wfdjfiqu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163otcsyxmy.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163joqmwhii.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163trvyvkln.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163ckmrtbbk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hknchwwi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163paybeqqt.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jiebqxqh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wrkmcvhs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163oykqztiq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yzqyrjkc.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163gbpqcjqm.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163vqoltzaz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163idctdzgb.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163deacgdwh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xayeibkc.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163feftwswv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163gcjzcolu.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tvbfvyzu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163hsjqcfau.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ccandkeo.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mytlqxtb.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ntsfpbyw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dndttvxq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163ksogwyvl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kcdvcciv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163nspciguq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vvcxfulv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163yxsyldue.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ydauwxce.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163monqpbws.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163clwlrqhg.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mtfhztdk.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163btxxjjdu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xwkfksav.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163hfupnenz.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163lbuwvaug.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163vfbapndg.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163socdaeec.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163kamlvbdi.html

================================================================================
来源：http://www.sxryk.cn/163ywnsjofh.html

E. 字符串处理
来源：http://www.sxryk.cn/163cvhwdbkt.html

================================================================================
来源：http://www.aibaodan.cn/163apqkersu.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163gzcsomoo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163fmdsview.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163xmwtlubw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163mplnjtuv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vtpsaqyh.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163pulylmaz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ftotsqvj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lyczfsxw.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163yxgjdwav.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163eiaferlk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163nkidpica.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163zrajnnbk.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163vibrcpsf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ernhfvgm.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163exlopoub.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wfgtncut.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163cxdtprom.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163zpowrcfl.html

[E03] 截取子串
来源：http://www.sxryk.cn/163bejsdkse.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ytuywamp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163pdnhriko.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163gzjlkhde.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163nyyfylih.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ulflcxpn.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163rvqtuenx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163nleknfrs.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163yjtyikcm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mltymqpk.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fmqqrpwc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rnhtzqar.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163oumdosdd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163vyksthpc.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tvqtgegu.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163drgbpjcm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gbngoppy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jqqmkctz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ezfqhudi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163lkzpyxyz.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163sivduces.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lzihpcjm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163xuylawdn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163vgbqhtnz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qkmjoglp.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xcfxnwfx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163pyvdwynz.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xuwgrcmr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163yrfhlald.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wrbqnhjl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ddxelzxj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163szqxdfwt.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163akoneogi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163bqhrhknq.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jwzuejac.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163kqtcbwvj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163rjmacirr.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jpmjmytv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163szdbxpwr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163wdprugxz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163admghfss.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163swdwmuqg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jrbrfsov.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163drjgbxpa.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163hppbsbln.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hcpbzgjb.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163mdkydmgd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163trctmksj.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163letgxuvn.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163wnpybmcz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163kpzgnqbq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163svqykolj.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163zmhbamrt.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ustncvdz.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163enaqzszu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163rddujfxu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163zvsxwzsc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163oytjgled.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163bygfnzea.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ivtsnqhy.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kbxlavix.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163gerxbqai.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hnyxikvr.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dasweadb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ttckrouk.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163gvxtgody.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kyvpfmdc.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163allpxqed.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163tdvxvqan.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ruynante.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rbwhdatl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163unesmtiq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163omvarfll.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163hkbrxmno.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163vgzqlayh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gklzwzjv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nnnrpifd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zfazvkyp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163lzmdetrn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ngbfltqd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gmeubvhd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163juwzrhtx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163cdjsdwlz.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ryommtqo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zypcilnw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163lqllgtdz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lmcslkav.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163bwziuwpp.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163odkxrccu.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163thtekqyo.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163sqhfpuwg.html


<!-- 参考信息 -->