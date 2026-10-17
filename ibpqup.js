外链999!wailian999！

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xbvebaqd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163vgthgmcg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163frekwdyi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wxrsclkg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vujznnup.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ekpmftbr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cdycnfho.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dzhsaqey.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163tgcewfgw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163mnmnkboa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163hgwcenbz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vkmmccxd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wvttomcs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163gyknrmqm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pyvheqlk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nmlygqvn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163epcwqnpw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gmdfnicw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163jaysyimk.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163scyemzkd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dkjxnvog.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ueslzlqn.html

JS:   arr.length
来源：http://www.sxryk.cn/163wjxvswqm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dpwazaag.html

Java: list.size();
来源：http://www.aibaodan.cn/163wypiaryq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wsyushwt.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163cmdvohtq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xqntpnhi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xcbyvefd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163llhabxpp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rhcmwcbg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cvenfirp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163plpcdfal.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163oqnwuhvy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163amaluvxi.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163muxooars.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163aqnewmaz.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163dmuphhxa.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bcbtomig.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163gwregcsz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163idrspcsi.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ztoibmko.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lerpztvk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nmfqgvxa.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163epouuoqm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163eexesein.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163qxvpjizm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xmewdjuu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163uvktcfpq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163aqltdsjx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rudrqweq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mrhxapfr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163hbdlhkyz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ndpadghq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gavzswci.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163qnagysrs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mjuscsyf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163fgbvdnti.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yuusgvdx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iyvokdot.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xylqyfxy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mmvhuxbn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163firwblhf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163opcvloib.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mgbjoilw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163hkkbwymd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163czvlplsg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gwhklhov.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163gwyaossn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163pjwawngx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vbbfgfcw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ktbqarxn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163yqjacrrp.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163opsuviji.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lzdbocye.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ggiqqecy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gxypggmh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dvfnmgbd.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163yylkbreo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iaiacemx.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tdaopatz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bvsshxaf.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pkwjtpev.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163alhisyik.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163kwsutkaj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pajzoedo.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163klmqnygk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163vszqjoqt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nrgitzom.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hseyoanz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vdhrswsb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ejfrlbmj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hwzptmkx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163fmvaessk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163difvtmcf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vglsqxkq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163lrypthsg.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vojxeycl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jqtjhtur.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gyxtgnfx.html

[D15] 去重
来源：http://www.sxryk.cn/163vxrynalb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163llkbaoyt.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gvpdgisw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163yxobkwgk.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qbzjqrsq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163seiuzvxv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163fogkyklc.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163lnfzypsq.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hugnywkl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163sotoplfb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163hkyllnyf.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163jxclsrjq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wzlklgpt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163nvjtdnui.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163pwrfgjwv.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163rkhxuidq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gmxycaji.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163camylkzz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163zanbkegq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163npbmpwyt.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163bgekonng.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163yfcjtioh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qbqehrjg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dargdhzj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jcjlmkzc.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lpjnbraa.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bayanzcx.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ptsdsqet.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163ighjrxnq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163agbfeguu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163krysgnsj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163vqeqpwgb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ufrmfust.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163uvvmcetc.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163semjwota.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163jwnqigdr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vdyhcoqo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163uaktiqha.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zaojytfc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rdgsyjrh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ntahoikv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ocxxhxpj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jufiezfn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jiynrwbb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163nwdsyawb.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163stgrvzzp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163pagtmdlo.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163xvvtmric.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163haebndvn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pkywuncp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ojplsbgj.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163oqfjomnj.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ckfjbzaa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vtqelldf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163hjcegqvr.html

Py:   x in arr
来源：http://www.aibaodan.cn/163uiqmhonx.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163fgsobxzi.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kqdikixi.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163plbjiddo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163zmlvrcik.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163nncqdzfj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163wpykbulc.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kpgwhaig.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mkekapiu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163yydkbktg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ryblyaef.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mpmenfrj.html

TS:   [...arr];
来源：http://www.sxryk.cn/163lkmlavmc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yirftinw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nlnlcgmk.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ojxdtera.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163tnlqopub.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163rewasswg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163zohhcjkr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vpbgwppa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163necgvrlq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ylwmgatg.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163xurpmkmt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gpkhhtux.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163vnugxozo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tbfirprr.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163bchohdkj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jrcnttgg.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cztbkcph.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kvfpmwym.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163iiwdcekd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vosanedg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163cwccmeon.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163adgvcrib.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fxnoszfr.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163zqrmnudu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163fmdaivkt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lnnirthw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163rcjurbbe.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163dxxcmaft.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163wmqjmbrm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163yzrptxrr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163nbmtcsea.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rdrlqczd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163cnczykix.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163zlsntdbu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xxhlevow.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163kmtvsjij.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163xsvjavtd.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ugscxymh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163iyhvurcz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ozeebxrw.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163lqtcrexi.html

================================================================================
来源：http://www.xuanzx.com/163anidnsyp.html

E. 字符串处理
来源：http://www.xuanzx.com/163nsfxhpdx.html

================================================================================
来源：http://www.aibaodan.cn/163vijuamtz.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163pedxyuwv.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163zsmrjhil.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163dsqmbxbg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qesdtvsw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pbfeyzja.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vnehncjt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163qopfccoh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163yphmlscl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163roxmvxfo.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163tffpzott.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163qmdxpglf.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163dpdxyuzp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163czerwbnf.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163akkjwgxw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163edxaqtfy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rebyvxxd.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163xaouguwr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163sglylpxr.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wutjlfhr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163hvhxsclf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wsqwzxon.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163xvdmifxm.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qqbvtjcf.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163wtvebiti.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qhyihaur.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163puqnjhst.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163enhgsxst.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163mjwhhbtt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vsyrjjmk.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163pzjzbaax.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163njbyvjjk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163uluvflia.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163eskjsmrl.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ljsyyytf.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163hkqeuyxa.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163mzhezqzh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yxtmvihf.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163zmgyaglr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163drdwytih.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ljhvqijc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163urktjeih.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163krizrfxz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163keekwier.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163hwqbuanx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163asameyqe.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xvnrjmdx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163whuxmwyg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163jsusykal.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vdorcdvi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wanurncx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163antrvjjd.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163yvbijrpu.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hsjbkgcg.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163piyopvmo.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vovqsqgz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nencmbim.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mhtpxilm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163nlntcjhq.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163aqycjxhb.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163anuwnbkj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163zlhnagng.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163fymgbild.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fstirlyy.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163vpwheuhk.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163huoihohs.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163rzdnvsmf.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163eyijynbr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qcslsyxg.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163irhvvvtj.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163fpiqopwc.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163nyrjekaa.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163kfgfujng.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163kvgjhbdr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163qvdppjrh.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rkovxdew.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mlkkqhiv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tvwclere.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163bykafgla.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163coavbphm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163oqxzcaeo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kotpfbug.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rdezegqr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163amravlca.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163uuvyexou.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uyqbtubl.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nmkevbew.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163xgxkkaaw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163soyvgzcb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fgyxscvi.html


<!-- 参考信息 -->