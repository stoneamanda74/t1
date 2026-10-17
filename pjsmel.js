外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163evzdmvsx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xpykepnq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gqjfwdvx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163csymsnna.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xwlqcytx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rnoftrie.html

Java: // 无解构
来源：http://www.xuanzx.com/163tpwhzult.html

Go:   // 无解构
来源：http://www.sxryk.cn/163djisniic.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dxakffws.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163tsvxrueo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163aiimelol.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nbyrvigh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zoybrojq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ciihdisi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kybtnvlg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kdrypxnk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jajljrfq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xbnmwcec.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163pnmgrrwx.html

================================================================================
来源：http://www.xuanzx.com/163xnffztjm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lswkxovg.html

================================================================================
来源：http://www.sxryk.cn/163rizoonis.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lrgcunxo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pnbcvrdo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eglurpnx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vbgbmqww.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mvandfun.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ujysdquv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163oftsrsyk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163frebyexq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163moqflqtt.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fcfgdwlg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wszhrkfs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163unpgbtcw.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163awotpxzy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xyenrgxh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163mwugbwec.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tnihwaig.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lwpyzfkr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ygcmadxz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hgviodzr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163idfgtkgu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163atiedzxv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163saxopwtv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qmhwxbkr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rahxocgg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163phtbrpjv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163amegkjyo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vbvrxobm.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tvgloils.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163tpnyddti.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163skilifek.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gpjrcgtn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hwaqcrpr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163kyuehyxy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163cfjldwyz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163vltafvwh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163gjfhdfre.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ntoyvdmm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pteyzcgp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163zcboutvg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ovfzclhi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uciexqxf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hhqadrtv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pqhyqpti.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hluifgvf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cddxtdoy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bfxpptqp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163eslhwvwr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ifkogzyq.html

JS:   arr.length
来源：http://www.sxryk.cn/163jtmweawu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163aimwrpyo.html

Java: list.size();
来源：http://www.aibaodan.cn/163amlhdnkw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jhixtojs.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xlpvvoii.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fwzyohga.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xtrrejto.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163eqlzwfjn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ynunovdz.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mxfjueyl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163olwwjlmi.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gckjcuyh.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jnclkfgp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nkdhtxuy.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163igjqyykn.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163fllocsvd.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hacxjjqt.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mqlodvcr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dugyvomw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gwrugupm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163jsqejwcw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xaaoiagg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jrevkvnx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163fatirwpg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qboiclau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pqrfukhb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sohbvyri.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kkwjaias.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bwbcuoui.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ovwwfmjw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163neflfuaz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zzoberim.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163httygwhk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rworjrvg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kiflypbb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163aibddlxo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163htylljuz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wyygwtbg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qtwdytfi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163gszgqsuc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xluhhvfk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163onqhjgfz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163suvkqgtr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163uerzgpth.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163dumbwaly.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gkwkupya.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163vwqmqirj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163etjlftop.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163npnnczsy.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jirxfejw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ptdiwfto.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xeselqfd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163zxhakttn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163urxeobgv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163oiyydryw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kxtakgti.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163esveouiq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dqhwidjy.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163byyllpdc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vwtvqzml.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ybsshrii.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163eyjwswhf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163covpupdn.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jdlcgmkc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pfghwrom.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ktyrltuv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163flmiyvwo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163hlnfsgtd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jkpdqbav.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163lrflgktg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163hidmiyqu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163hltkxisn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ulxedsyc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yetyjjxf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163aldlqssv.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163utkdduak.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jcetfdul.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163smwywjpq.html

[D15] 去重
来源：http://www.sxryk.cn/163wstviekc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zqyeulye.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163edubhded.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ruvzscte.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163skwkaloa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ybkfyexa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163mkpcqnbw.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pxfuofjf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163gawbgxoj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163nqzcjrpp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xqbstgvt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163grdvcunf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163khbsmprr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nwepodku.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vsrkotwm.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163fwedzeqm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gmilpycs.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163cgavncpi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163wwpabpgc.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163uqqnqpgp.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163ubbapkpc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vzspsrfc.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163bkwaeziz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ncsahckl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ceqopcum.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gkislsho.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163rxcrdmki.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163enkrqlmq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gqrpfjrw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163epsztxmo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163hgxfvkew.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163leymxmsd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pxkdlkei.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163esjnjexn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163jkumfowm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hemqjxef.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163xwtenivz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163bmckdysb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gnlrtadh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163vfpyysjp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mmtagtob.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163osantwmg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163zjabdyli.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pcwyzsvy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163cajzvtpx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ttzfishf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163crmhhiwo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163sjiicwxj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wufaxoup.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xihxqrzo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ccazsukr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mozjvwjw.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163xuvnymhb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163gkszsorb.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nzrpcnog.html

Py:   x in arr
来源：http://www.aibaodan.cn/163efrdsalm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163broitoef.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163llwdfdyq.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163lqrpqzmr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163zgeenwuy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163lslodfwc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163qabrnkbj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dcjyjuwk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163kqsgiyxp.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163qrslxsmm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163ivddnlwc.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163osjffhbi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163byxmfqyy.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ephnoodf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163gszkglgf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ishactso.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163epbnbfnw.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hjyuftba.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vfaoevnx.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163oadlxwvg.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jvixdefl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zcylabiu.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163smrxthff.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163oiigizsm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163updvqtcq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163wgesyhrv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jidxrhez.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163frdwlubj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163upgytcnw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cqnnhsgo.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163tjnklsrs.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qnextwlm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163zxeyjmhg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163egzlftpm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163kuxqdojy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163uegfcqeg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ieeugdtk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mmmmdepb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xyyydhom.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163pblvkgbx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fiblzfbr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ejpgzipa.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163wyuetqpc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fyeztaso.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163yldlbywr.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163oxoyzazn.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163nicebfzv.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163salbgqhe.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163mpubrulo.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163nmoguqpo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vhgvkqju.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163bflzybwb.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163zdnihuxd.html

================================================================================
来源：http://www.xuanzx.com/163awuffiti.html

E. 字符串处理
来源：http://www.aibaodan.cn/163fcmnvyxk.html

================================================================================
来源：http://www.aibaodan.cn/163pwpfqbez.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163whdbuiev.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163xnvueyag.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163ykrpeoci.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qoscpzui.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wggpvibf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jndynfby.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163gjlnbjhs.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hqfygfho.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163mhisjrkb.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163xgprbvmp.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163itpdsbaa.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163pdfnicdp.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cjcbwivx.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kvyuwtos.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163nqjmwevg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163rjnghggi.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163lgaerasm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163uomvcity.html

[E03] 截取子串
来源：http://www.xuanzx.com/163gnnolzci.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163lafvhuiw.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163lzsgouhk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163uffqtzyy.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xznlrpxi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qmvqlexk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bfffhtdp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163coajrzqb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163klsfkhpj.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hnicjxcj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163veknwpbu.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163jsdpvvct.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163fbulyhjl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163aiglcpxd.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163inbdlrbp.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163jkkycwsa.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xktonuxt.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163gadecxqt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163rcxeqgzl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qwrktrnw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sgzommio.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lmjfddam.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vjmyqzpe.html


<!-- 参考信息 -->