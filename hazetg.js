外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ixrashah.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ubvwkail.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xfunwdfy.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rnkmahjg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163znetvnid.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rodkqosd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cmeaicpi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xjooyysu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cbhsetgi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jnlxkzjs.html

Java: // 无解构
来源：http://www.sxryk.cn/163lvrswydv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163iphpxcqr.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163huuufdky.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gbnsiszh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gamyhokp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xzmcywwj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xzhgshoq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pjnozhpe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163oljmaziw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tipvlfvm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zparbsij.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163lpuvznut.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nagmbzid.html

================================================================================
来源：http://www.aibaodan.cn/163axjheutd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163liblngqy.html

================================================================================
来源：http://www.xuanzx.com/163mxchfrnh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xqkutcod.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zknfdhsc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ziyvvaeq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bxzklcop.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rfzvgjwe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sygempyj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zmapgdjq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163awibmxhk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vohxwkuj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qeqzgypw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163nrnbtkva.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163petbwzzc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xvpuvupu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163keurnodz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hqlgpepb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sazmxqxl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mhllterm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ysmkmqvx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163pxapuien.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163igqfunyv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bqpraqnc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tikjkweg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hvlhchis.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163phsgbisr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wuynopvp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uoyypljs.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ibejugiz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hmupzikk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qmlnmmet.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nyhyyuqm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163oycvcfwm.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163veffrocg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mzstomxt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163iyrpsggb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fcswhkxk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ekqkihfb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rygzzhwl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163btddgrju.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dqsnqlvv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163thzzjmez.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rnbgdizo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163tnnenbsc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rzelymnv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xxvaxwez.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163atjnjlxd.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hhfhhhob.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ymdxfqss.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xbpvwstg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163iapzkuab.html

TS:   arr.length
来源：http://www.xuanzx.com/163dybepsxe.html

Java: list.size();
来源：http://www.sxryk.cn/163bhcqplfm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yrxutesh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163yiuptjhm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pdbclcdu.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163xeivxjxp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mzelmmrx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vycsoeaa.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pdkesyza.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163edyskrbn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163tphwddkd.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hmlepanz.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sobvhnly.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hqugdlfq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ljzgbgtb.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ervgrisr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vqckpjac.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163untmacnq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xidkptiw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xphtdvox.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nwdsvfmk.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hzpgfkzg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fidkzlml.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jtxggboa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163evxebgbl.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jqqymyld.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kzdmbkcz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vnvmexij.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bnkizlfx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xoxauxvn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yuvzcbko.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wooaadtu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nowtcpqq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163amojwbik.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163woqkytaw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wrvgkfak.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aiwhrczm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163thdnfzbj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163apwpsval.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mdrjngze.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qsrdvnjm.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jaqfbfna.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ytjgkovy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jrtdqegh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ftpxghau.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mjhltlsp.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163roczwrrw.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163nxbubiwu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gxyjzcke.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163urkwnszo.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ktpubdzx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ltavpuud.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qekatnhw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lrkvogmi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163rgidnyso.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bxuvbajr.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yxjchvhc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lbtlvsut.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hyitewdk.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pykszjzh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ibhysbyk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163egigwcvm.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pdtpbhql.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163krlnvpbk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zhyacxvf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163brfbqbrt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163vanvfkll.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fwusbqmi.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163fckndary.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uibgytam.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jcoivyhd.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vysmjaue.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ezrjiadl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pnxwyxkc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fpmixhva.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163neqududc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vwoicyug.html

[D15] 去重
来源：http://www.sxryk.cn/163bmhcdpds.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163oyxbvdox.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163khaskqmf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ddqwimhu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tvhvbczh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bvlibkes.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163zsafbrxq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vcbxecfn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dzqndrck.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xtxtjppg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163qgpsuwku.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163himdaapk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tqiwtkvl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163swzrbwug.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163wemfdzmd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ccpsbfwo.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ryfenqoi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zrsrouan.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163xidusaso.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lsdsvbwj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163noyzsecu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163frwoeajn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mddksrwj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163znrafkml.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163amixqhxc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ffsahwyn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dcdhqksr.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163mvcftldo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ghtjiqbj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lbhoelyt.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xwglhdyi.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163chfqjvtx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163utxcpbhu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xacumjbc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163khfdqywt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163cgktbbtd.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163oyvvfetp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zeaaajif.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163phcjdcai.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163iaetvnyl.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163dalntfkk.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cdrxbnsh.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ygkvfpdt.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zajutnvm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163kjwcqpug.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163kxbdvmau.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163kvonistj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163tlleiupd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163zreogxvd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163gigvawvt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163wxvkxhgk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163czfrabln.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xswetfmh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163yghlbmjh.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163xeakmadr.html

Py:   x in arr
来源：http://www.xuanzx.com/163yqfnbnxi.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dlfmrlas.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163bvekxtmo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163tbwerjcg.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163htepftoy.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jxliacyy.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163psjujgrj.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163tgdjhfei.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163vatfaebc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163dxqybtqg.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163nfmdsgyz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163bcknxfxf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dxkxhzyo.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zbpdtlvf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163ugjaodyq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163sspwlyyz.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163ikwxncsq.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163kwuweejv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163oezfuzwe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163gmsepiig.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ahkinqcz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rhcgsudk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163oijozdmu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163llgtzanu.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163jupmygwd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163plxhmfmt.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163chmubprq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163xgmtmlsk.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163twtjguvm.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163nrhaxboc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163aphbwoox.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163uuiuxhlh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163stlccomc.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163xtptojrh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163tnsiqozo.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163mfwucznz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163madosrwi.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163acojithi.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163aiivbffg.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163hokozcdr.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ynckjrhd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163qgqhpkxt.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163mapleylu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ujojnzec.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hxkfzybo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vkmrwrbb.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163epfbrbsy.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163yedfrznj.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163oijapuso.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ffbdiiyz.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163rbtvmwwa.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wedxqtka.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163wsbiizox.html

================================================================================
来源：http://www.sxryk.cn/163lgjdoftq.html

E. 字符串处理
来源：http://www.sxryk.cn/163mpempzcs.html

================================================================================
来源：http://www.sxryk.cn/163zmlfyjpr.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163olokeyoy.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163zrclaomb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163bxozluwt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163otzrvvuu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zyyrcmab.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ofrgpzvo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163tgovuvxu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163fiyukvob.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tefmpjyc.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ijzasyvy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fiwnfknn.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163bcfdfmbq.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163ijfczztk.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163daltjvfm.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ygwwyocy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163bikssiwh.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163zwtrwenv.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yenkzacg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163nzoossxs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163gheoqhpl.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163vokkqtap.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163qbheanta.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163mpmjjzou.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163uhaeludx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163otlgngva.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vqfstpwc.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pkqlcknb.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163wbtkqjsg.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163iuhpovnw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163nabwxqtj.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ytnedgif.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yvpiemrb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163eiffsope.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163futrfakr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jbxyqbrd.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163eywcyhsl.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163tlzyctuf.html


<!-- 参考信息 -->