外链999!wailian999！

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ulcptkak.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ctvukcll.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lltlejif.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163svgqxzdg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uzgjdwhl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163dvzpieno.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163pyunrlse.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ihhjtcmy.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ilcpmzuz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163sfznrxgo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gecgxwrm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163thcwuvcj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xmhgwyac.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163yjyyofhy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jvvwctxd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163dzbtawhp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xihayrye.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163aqsiruss.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xyhjcpbf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163gclrwtop.html

[D11] 反转数组
来源：http://www.sxryk.cn/163sqxyidki.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gjyziyhj.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163oryovwxn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wzzzfjiq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bvbzefxl.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ftcqsypc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yzcxqodg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163vsmquwhf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ksqibrlr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jxbtjwwv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163whxslajl.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hliwqsmf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163btanaavq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qhwyynid.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163uqbvraxd.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163gmakbnvt.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nxnsfsyr.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163tlvuvvzb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163brppjnzh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163eyidhwrc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bwvikvlc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jendybst.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wdmvjcai.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ilevbgha.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163oovjosiv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163rmwbulwp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163zsrzwjyq.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163pvtfnbqt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163pdleniyk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bhjowctp.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163lzxxsxdw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163orkhcvcs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ehtrmeth.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rlczdvub.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163kaauivkq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ghqycona.html

[D15] 去重
来源：http://www.sxryk.cn/163aeeobjpq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iiqxnvcn.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ekrpnzve.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wnwcqwte.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tuiplmfo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ajgqyxbl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kcuejzne.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163njsjqjrr.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163bztexypt.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163aghysezq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zifnlede.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163egktdpoa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163shlxotwq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dviporck.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163mixsxtjc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ikbebeav.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lztcxvqh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163bmfeslcz.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bhqwzywg.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kwdjoxdd.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xbedxsqz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163lhirqseh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ndizngne.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163albxcelo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163gspokaga.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163dfoezvci.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dczmpozs.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163glpuphqa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tdlkfkkv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bqgiotmn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163nzyaybur.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163sapfandp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163krwjhldu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163pszdtwmq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163olmsyfxp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163wudrqiej.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ousndreu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163oslktgpp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163bewzkskq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163uvptnvno.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rgigwtje.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dxmgirss.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163gdpfnmvy.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gephjjvb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mqtuztpn.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163yhtoyddn.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jfonipon.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163frllcaqm.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jkkhpnzs.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fxfxwmeo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163uxtysvig.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163wlufunbi.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163iclchdlk.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pupdhgfm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163odxwkoag.html

Py:   x in arr
来源：http://www.xuanzx.com/163kaglkecm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163zqhquxuf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pkxmmcuc.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vudwuyhs.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163kxylmdts.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qlyrsfuc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bogkyrah.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kzqgbvrv.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163natvoswm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163nkilrxpx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163fskskmmz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gdhblndq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gxbixryr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163lxbjdzjj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kjjshwss.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163wwomadgx.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tzfclpjd.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163jfnslheu.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ddpeoefk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vqtxuzvy.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163xosbotnv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qxurvnbr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163sbxgqhkf.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163cyyrvlqd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163bxmlvoyc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163ibnjdoko.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163rcruljfh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dcnendjh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ehkhpnzu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163uiurfvev.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163asgloxmy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163kkdeezvr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163sxrcscca.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yruiomwd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163qajhhqhc.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vckvgajx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163octlmvus.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qcnjaset.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163eripxooh.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163dwmncqma.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163jxhjumaw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qunugiaw.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163cycniqci.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ivwvminr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163dbzgzhbt.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163yjiplqvf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qbthnrbl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qdixybvf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163myocxasa.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163eynlhtcx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jznbdmuo.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163lnnmpsrl.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163utrewjud.html

================================================================================
来源：http://www.aibaodan.cn/163qvqqbovk.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ehsxlpee.html

================================================================================
来源：http://www.aibaodan.cn/163gbzngomk.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ehnjyabx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163pbyqrgdp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dxkihakx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163zsejusce.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163redaqcsc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163uvuzgzku.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163uukhccvs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dmzaigqp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ckedxdyz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163rixvxpex.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qfhdgukl.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163sywsbakm.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xhkbishi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hszgivef.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wpminlpn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jqvqetwd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ihfekzgd.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163zpzbwgnp.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nuuffjse.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163isbalozc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163cyleaocv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nljjgqcf.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ommekopk.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163rlogdnrt.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qqfsrytm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163yojuttir.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163gsivgogm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163gnkigzha.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zigzsify.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163jwhtcbew.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163zdicsakk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qznebdca.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ydjbhatq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fvwqedev.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jwmnkamy.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xbxlypur.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ihhnlzuo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163aejamevh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163kelpnrrq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163towtmfdl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kpojmkjm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iwdardle.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163cidwxfsq.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xdjjeemq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163deswwaqk.html

[E06] 替换子串
来源：http://www.xuanzx.com/163vhnasygh.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wrgqjypx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163favyskrm.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kddwzthv.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vfopwfuu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163oypthbcy.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163kclzswxb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lccvxniu.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hauoqznn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bjghidwp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163fglmjkrw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163sqfzjmnk.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163llzmuvxv.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vhxvytnk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xbvrmgzq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163qmbcezjc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qfelxtsf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163yctftwrf.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163rnclohdz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zdpvvxpj.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163guavdcgh.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163voynecku.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gikzvhve.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ndbntzgl.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163uelruhfp.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163xohubxsl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163yqtvnenw.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163htutzhlh.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163fukyiiic.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163feueavbc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163utancyml.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pkyjsfjf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163todgyuoo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163dhtpdsnb.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163izxhloyd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163kiwkobgw.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dviczcev.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rksdaeux.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163iuatuhsu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mmcspahc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iqrepput.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163uzlxwvvy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163gfiravsy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163krkivtvh.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163bgithxwl.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163guwczqxp.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ieklzmsh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rakbxset.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vvrxmifw.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ngeseldx.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163lsvolfgr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163mstfrfim.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163wgitksbn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163byiwdcnl.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xizpennf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163clrkweqb.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163obnuerkc.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163dhrpdfjp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163kufztoev.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163njyzbhyb.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163abfodxko.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163cjivbrqr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xoejkkfj.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163fbjxlkiq.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163iaketkhi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163uimrrqjz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163uotdqdvy.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ucoceyzg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163uoavyxdf.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163bxcdgwll.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163gbeqxxav.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163dqcrzvrv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tjdlqrsz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163olgnbryz.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163sktnlpeu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163qdujbbqf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163jxknmgkq.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163uynkvabw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163jzqhirrq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163crnlzbxw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ekclihmj.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163nsoflsih.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ndkwhgil.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163vvxbcgfo.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163cfyvhemc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163lnsxpobz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gbiulnxd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163yxbnhhsq.html


<!-- 参考信息 -->