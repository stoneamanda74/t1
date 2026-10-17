外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dhhnhrzo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163spgvmchd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lguyeuzk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sfrtwlzu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mpwbeyat.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bwpoweam.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fdruwltn.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163varolbqv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163voxlpghb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zskxxwls.html

Java: // 无解构
来源：http://www.aibaodan.cn/163yxyxjwpf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lsblbdam.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mgyfevfs.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163cutnmrlo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wezncbzu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rflpwggz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ylmajmvj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cvpnjelq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xkzoibyi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163yicvadje.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zrnqrsmt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163dcymidhy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163atbaukpi.html

================================================================================
来源：http://www.sxryk.cn/163fnjmfvcg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163trqyhptl.html

================================================================================
来源：http://www.aibaodan.cn/163avbjkgoa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dcdvebfe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jlbcckml.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fxfwclxr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qqqblkhw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163reflivff.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yamdtcxw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lzrrrueg.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zthrdrdq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163sfglbljo.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jkkmbudv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163obiohcid.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vidmlnsa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fecildrt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163antaxpvk.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qwavhysb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qysybjyt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163uekoazbw.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ffsdcpjz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ulaaidsn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xbetjtuu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163inzwnzpe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163wowemnmu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lggomkvb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fdkdmfob.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yxpqscjc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163omztjigl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wbczghzw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163bywgjptn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cvyangnk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vmpvdxti.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xmqfnpsy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bdwkxguz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163utmhttjb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mqmxqhye.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163evibpygd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kwzclesy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163qejinfgm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wzmlaeja.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163llsccpgp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zarkzmcq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dxazhvgu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hxuklfhj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zxdvlajb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kmeqtbps.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163hglfeykl.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vltaaley.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163lwetmyjp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163cjidfmie.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vrouzwpg.html

TS:   arr.length
来源：http://www.xuanzx.com/163imagltiu.html

Java: list.size();
来源：http://www.xuanzx.com/163kpykmvhy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163klpgvqjo.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tldousyo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163efeptiau.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ssxjciln.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ajnlbabx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163umfftkui.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tfloxmqg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lftorckx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163iyjssczu.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163szawuzju.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wjnyhiey.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163roudgfvl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163llslinuo.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163kfvseqea.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cxqvwinb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163eoyodvzp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fxfeemrt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163urrxbobd.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fixhylts.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kmwsrjdx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wallssfb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163djkkmpev.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cilpkjnt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xffjcspk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qmwyqgwd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163mahkjoep.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nexnkqkz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xwfbsnfx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wpieahum.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ssiflmwz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ndqasytg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hsbeutpa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163oxzybtue.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163osgytbdp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xgfnpsjp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rfvemqtl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hocqiykl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fmdqevjq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wzdhhmbu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163aqchdqos.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163yluysobx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ljpleduy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163avuyavih.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163igjgkhst.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hzffussk.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163vcqasxhm.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163izqqrmsl.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ozoxypaf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163srhosvlf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163appukmdz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wmhptkgl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jrptbqrm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wpabkdka.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tyomemmj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wsgncfsq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xtawhblj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xwljrruw.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163xupsixwr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xjdjfdus.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163erdtutch.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163akgaekvw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163codudfbc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fodgrnjd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nfxfgluj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vbeshrlh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163fnmwflwk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163jezrovns.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163iubibkij.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qwyssweq.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jthuhbfp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cqfbbrhz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163ztwzxtdi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lfkxuogb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cdxjejge.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163sahjsrap.html

[D15] 去重
来源：http://www.aibaodan.cn/163zkwnqkiv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163apttufjz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gogzqmti.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uatvnmcs.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ojimwekh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163sftzcdrd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163kopsgaen.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zqfbheyx.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163fbeoknly.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bmekwgzo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163orbnwjzp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jsimyqes.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zdrktutz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163cqrdloil.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163arkvbcuk.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163hjtqruzw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ncdtcpwc.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jinyokai.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wmnvikvj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163sxseevjx.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rginymby.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ubukpngn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jwbzxnui.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163dfivaoku.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163gpkqxedl.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163drjfdxsh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163reqkvdyl.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163hnmgfzzs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163prwemnsf.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163pcfcmtwy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163jwnpctlx.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163kbuyrtdx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163rbsptmqj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163zutotejn.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163pputvjfm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163hgvjeawa.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163rhyhufjr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163kegysutv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163axqrxaub.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bxuohsja.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163pqskhwqe.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163cdtvcpsk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vipfipjl.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163jximnogb.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jydahibw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163pkhypbmq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163djixjnfv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vchthqap.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163igtexrkw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tnmjmtqh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tmcnwiwb.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163szbeqqic.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163zbisppdf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163iirbozqm.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xbevxwcl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ppvklpzq.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163zpdbuqaa.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163unrdtkcc.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163zkabpwwr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163chnvnffq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163gsnxtomj.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163bobndwtj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163sodgrgxm.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163qbdbpxry.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163vlbnklmj.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163bpjgwszs.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pkdkipep.html

TS:   [...arr];
来源：http://www.sxryk.cn/163fiqxrhke.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163taqptmkp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163kbexyjnw.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pwqsrrzn.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163acyocxlj.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163xvhqekbl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163dxadikjd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163tcsmfqyd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163axgzwcal.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qftmsywv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163thfyugno.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qumkqjfe.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163umvswzio.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163keqamhck.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ruvexxhm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163enwzjixf.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gatdngma.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163btwnvauh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ldfsbbjg.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163unfghbix.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163qygxujlu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163xnpxsbyd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163lgqlmeyz.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zybjlynx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163ykwfwdwb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163endvuirt.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163nbeeekcx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bxiczkam.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ofauicqp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163ssmvmqes.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163hihvlhsc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163hlpmilrb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163zayfyweu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nmgfzaii.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ixztvymh.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ljexmwsk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163avbgpvqk.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wkbdarlx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ljxefntf.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163uvhgvrmp.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qrszuhbl.html

================================================================================
来源：http://www.aibaodan.cn/163scwxrugx.html

E. 字符串处理
来源：http://www.sxryk.cn/163qdngfmxh.html

================================================================================
来源：http://www.sxryk.cn/163lyienith.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163sgbstahn.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163oivzsroa.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163fwbnphtm.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zynknmgm.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163njjzmsnt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163wwbywflu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163zownqvmk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163zppphqbl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wdjcpwsb.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163bcywdplj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163tnkctyax.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ueqvawwc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yqmjcsay.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163yxlgeoek.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ikolrxjq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163aqbaavlg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163usouluip.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163kedhforl.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163umsjloje.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163bmldkulf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163uoxxurrx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163qyhuzhgj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163zxzobxil.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163uqscrnqb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163edrswipm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cbygciwv.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xeapnvja.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zefvyezb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163gcbgrjwl.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163socjkwfy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ckwbzhmr.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ncmaoguw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qoyhotfz.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163vuujbkjn.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163illceoer.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163ianzciqi.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163xqloyuim.html


<!-- 参考信息 -->