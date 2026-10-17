外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rswqtuml.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ciubdshc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xbuijjuw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163whsyswwo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jcwsxpxi.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163cfrukjpi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yggqprea.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qckrykrg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163aohhjufi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qvfdxytw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xwgmapey.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dxklxnnz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mkoodfjt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nbykhunj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cniwfwuv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163kmygmuzx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vdyzuagb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163holwwyid.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pbcooaes.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eveywqtr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jawryzzm.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ivfnivan.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163iiiirrii.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tudisbiz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ypberrrp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lifajkvl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163noerltha.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ertqfjlf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163yggwhbax.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wfzrrddr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wiwagloe.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163xfbcvtnc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qpdajhhl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nyhxiicq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163coukcxlt.html

[D06] 数组长度
来源：http://www.sxryk.cn/163thsqjvdt.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cmtxtnny.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qbplmlwj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163adhhelsb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jgmilvpy.html

Java: list.size();
来源：http://www.xuanzx.com/163jisttlxn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yadczibu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ockvvapj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mbgewyax.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yssswnlu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ztcfgekw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fhtosplw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hqihbadc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wrdflwvn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163awlnypud.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163uvlznmol.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vbytjoky.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kotcubvf.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163drviwijg.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hpexwmks.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163qlltwjvg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fezynkem.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fuewwgqt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163uihbrfpk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wtnddzsz.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xlocrcyk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cfqdured.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ectbbhau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sijaqdit.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163tvrhdcio.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fjtfvpjk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kogbysol.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163pjlaqlva.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jodjhkhs.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163toylnaku.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163embnjuio.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ggmtkbmw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ohpyuugu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wloxlmfr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xamupvmb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jrwnnaox.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tyqzqfrm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hfovlnaw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pbycuchb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163velpbvsi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mcpwnyub.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cuoplnfx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163kcutdsmh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163btgduwai.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xqevkgnn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jjowblib.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fgkojrbh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163fexveixw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jerfjkmg.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vcpgdtpp.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163sycliewj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163hwvhpenj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jkrwwhwg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xuidelor.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163psctkdnd.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163qpjddpej.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163llihyqtl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qnipnkhi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163bzliguky.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163tpzdnqdn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hpalphck.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yffhffgr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ctntqvvm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ctudraby.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163bnntntal.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bjassymp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mdkceozt.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163lqwlbvfc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xgqjclsf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163kmjeckxd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gxojenzo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vyxblafy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rfopuqhj.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wxeejvft.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hgmrernq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ojnydvfm.html

[D15] 去重
来源：http://www.aibaodan.cn/163qthsyqey.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163syqxyanm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163klxdmiwa.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163slqnocrl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aghrergc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rddbzzrk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dfxnrdrf.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ezdyppaj.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qwuembhp.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vxhshcwi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vvtjasnh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qfbqjagv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sffytzzu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ycmtgwqx.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163neudbffp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163gswwrjdx.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163plgruwoc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163oforesnb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mnprinha.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pavmtnws.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163vqzcjzgd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yqfhnxza.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163qvuysoqr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163orptmqfv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163mpksmkql.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163egjqmdlx.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163nffyxmrc.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163hthrlkwn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163zfzgixec.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lbzxdbwi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163eptshgbz.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nhqzkzmn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163pqqxtbun.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163sqwwmqwe.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ikwnimjb.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wpjkktdh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163aofnxpdx.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163wqvexijp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163zvvqeuix.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163nljqprct.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pvtolgkx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163kzwxiqoy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cdxxvxcm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qcmplxma.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xraubhix.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163uxwlixqk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163hekjxjsd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163fplkqwjc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163arkehzix.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jnbmbrbp.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163qaofjael.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163bhcztcvk.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163opugkqkx.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163uuaosvht.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163orojkhox.html

Py:   x in arr
来源：http://www.sxryk.cn/163zykoxnhq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163eodyrsgm.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sfjtkjab.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163nmvwiush.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163uybuneqs.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163swregcqy.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mdvavybk.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163bjnohzpc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163elyyldaw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ownynjpf.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163zdxzbrtz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163mzymlbwu.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qwhwhavi.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163ndkaivgt.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163wljqhkwc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vatrjnti.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163xbdznxbc.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163iilaelup.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163vifperdb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bimnctst.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gqmangbr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163mureihbv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mihlfuzv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163sddyhrjx.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163iykgspcw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163neqjaafi.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163sivcfmeg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163tdyqmtav.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163lfcxqdyt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163qdgljpml.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163qzpqvovf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163jsvgkajz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163sdmdcyzm.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163wliblnpg.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163dbqdegch.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163tdfabapz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rsztrygh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163nplgxooy.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163fekdhdlo.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ogiimbpb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163llqsaakq.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163luoknoxh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163asfsqlnq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163kfznsszb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163jbmvrigv.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163spdpxaoc.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163pterqsmg.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hnvmfprq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zfsittji.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163kdddmwhh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ilunizaf.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hdttldud.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163prsvkhtv.html

================================================================================
来源：http://www.xuanzx.com/163yepeypcx.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ltacnkug.html

================================================================================
来源：http://www.sxryk.cn/163nhydejyi.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163baydnbou.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163lfmdmdrx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163uuhwloei.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163orbblmtu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gcladbqn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163glrqohcr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ejlwjxae.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dluvrzvp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qubllqar.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163fucjlhno.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163malcujcy.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163wepdcvyb.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163rqhuiqhw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163hlvgdins.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163obxeupoz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163zvkjcked.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163upupcnsn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ierwdkaf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163llozadpy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163relpxohg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163snllifbg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wgrtjjmg.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ninwyfvj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163wuqklcnk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kekvcjyk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ybbdbexn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gjjonrhj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163kgqxsgst.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163mawuncrw.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gehmtgda.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ojqimsny.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163gwvpoylo.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xouodtgo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163hyzhtdkk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163cwcessww.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163tpbroakz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163jioeclji.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163upnphbgo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163sjxmubtp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ysfwrjfu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yolpdzqh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163woxxkzqf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mraevtki.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163jwcejsxl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163usjitnha.html

[E06] 替换子串
来源：http://www.xuanzx.com/163rlqmmxrv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163axvdgqgl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163iwrjcopy.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hmftrdml.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ysodczgw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yprmxzde.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163rraqhfrh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zecgzipi.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163rkleydft.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163iehoplln.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ejvptvfg.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163djcanvef.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163zfyqevkr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163auxgwycx.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163qlyameeq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163fqwkkhjc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163ytkuiiof.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fcebvnvg.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163plduawtc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163csdqiton.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163vqfoqyek.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nqwkvxrw.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163duvdtjmo.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ksjmcpfn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163devlkdlg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163urkpbcbi.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163johceerm.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ynojastt.html


<!-- 参考信息 -->