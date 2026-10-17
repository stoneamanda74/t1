外链999!wailian999！

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163josdtsup.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wyvognfw.html

Java: // 无解构
来源：http://www.sxryk.cn/163kwudfpnn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163yrnuvhse.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163utpquqyx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cnbuplha.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163noonfobi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tolphclm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ehtkmnes.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vieqfirf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ssywwuii.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wtpowuzx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hkmnqrkh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163iyoopkoy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163znkzwydj.html

================================================================================
来源：http://www.sxryk.cn/163xvxyxwvb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163yqdnejao.html

================================================================================
来源：http://www.aibaodan.cn/163vqrbvufx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fjuzywqq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163noqclhth.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nbgoklrt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hcykbddb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oxtsifav.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163bazaxjdo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ymukkema.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163irgmdhrq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163brnfxhhl.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qxrdyrqm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fmnltxia.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bencxygb.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vuqpcceg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lisnagoc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lrupeeoo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lthcoghe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163risbvdrn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fbzsjlqd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xjqzqlyg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163adaklfxt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gpscxhos.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nslzgqqa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163omymlsmj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163prqcwaww.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163zpbvxgut.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dxwtiqxs.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163esbvrgfc.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163wztdvgfz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ybinorok.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ugsifwnp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163dkmsmdii.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163sardgmqb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dfncbbpe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163csqqbtoa.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mcsfjsqr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163gltxberb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163cannxiql.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tjfpzsil.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vtnzhcss.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hvgcfeeo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ghiwngrr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yhahgwqm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163sfpatwbd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163oqugtfpz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163labyegor.html

[D06] 数组长度
来源：http://www.sxryk.cn/163eqwkjmjc.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xckqjusp.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hwkrxcsf.html

JS:   arr.length
来源：http://www.xuanzx.com/163fgqiydge.html

TS:   arr.length
来源：http://www.xuanzx.com/163dpkejhgc.html

Java: list.size();
来源：http://www.xuanzx.com/163shqsdbmx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bwhzpggm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pwuedwnk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zbcbbqqm.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vrtmdtot.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qybvfyub.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vobrmnwe.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jvpvitaa.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cfwkmgvx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163kkiadriw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163chxntnah.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qiuhktik.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fikjgvwg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hxcgshkk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hwjbbfom.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163eiagqijq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163npvzbooc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xvrxrxhf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rejpzfed.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163bkvfnqwf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jejjigey.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wqhepiku.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jrytemxs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dqiaufhg.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vrrlwdxs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tyuyxjsy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gddyxblq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163julpyprb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jltggkbb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ywupwoqd.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hfspnfdt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163upptllcn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163chxyqjvd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xvhnunlv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nrrlqasw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ygbtbyji.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vsiipifw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163potoljbu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163uxkcdsov.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163pikowjtp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163vxblwpym.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gtuwkmng.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dnuorwja.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kxnlpspl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163yyemptmz.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163uszokyzx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yllztaej.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163zaydybkr.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163munblpqv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163omtedauo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163doofvlze.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xwxxwdix.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nnedggse.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uvbglrpt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ngxbjusa.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163uhxjknud.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163htjoyrpg.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163uytohmty.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163bhicpiyc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163djalbffh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163xejvgflm.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ckrxzqeo.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zncjdeer.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fhccttqo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wrmvhduo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163sgmatbpv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163voapywll.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163rnqkrooz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rpwortbv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nheiqiow.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zfxltaoz.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iuyfcghn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xtifgfnl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dsbgjjli.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rjimetqe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163upbgskkh.html

[D15] 去重
来源：http://www.xuanzx.com/163ylzdhclb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gxkqurbe.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163nqbttada.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163txnarwhb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lfjyzsmk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ednaeqjj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hzrvfvtr.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163byecytpd.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163rhiymopo.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163iwljhsls.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ljycfsdl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163frjcwhwf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163poiutejz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bcgonpxa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ekeqkftm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hxuipmmd.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163uvzxxzsc.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163oktbmhhu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wupngryp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163cwnsorri.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163monwgktv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bymuunlu.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163thlkkaan.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163brvoaqta.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ybfliytw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163uikcmrmw.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tbxxdbel.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163bcfpsnqe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163umrgyzjg.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ocufehgo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163skupgfpo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vvghrpci.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163gigcbonw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zbbzxpxg.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ebvarzkl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163zljetgia.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qqlsssae.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163dngxdmuf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ysbhmknq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jzktznxn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163fkkmpjss.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163cpzplidz.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163spkjyiid.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163ruiqcner.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163qrqhsrpk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163pfyucyvj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163nzhjigpi.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cprtcdsy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fptlvhet.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163icenkzeb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163abnbjrxk.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163lsspuypf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163csuhahos.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163trrfffgu.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163fmaujzgy.html

Py:   x in arr
来源：http://www.aibaodan.cn/163leychrpo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lphveadk.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xbeifdxm.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ktvojgez.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163luodcjla.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163jamcbyso.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163mpyhbnst.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163uivvlqyx.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bwgtysrd.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pjvbnlib.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163gvjvrflk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163yrwzoohl.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163byfvqeue.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163xjqupchd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163uyyjjpel.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lsyvpixj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nudzygiy.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163pxarzkrk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163glvjcfyu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163tnzyewtl.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163quaejdvr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gshyrsbv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zejbwzre.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163agxqqsyi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163ezqtwjyy.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163gcicwfui.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hsxfnghv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163wvypdykp.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163amyfkiuz.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wlgmkwyk.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163jntbneoi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hqktedov.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163itjhzoan.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163uipylmsc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163uvkjjnim.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163yqfmmvza.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dzjwphru.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163bmwbvvun.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163vkiyzhpi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ymuszseq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163ttjpfjxo.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163qeqdyuxk.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163rmokzmlc.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163uaiozkbu.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163quzfpgsq.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163sozwnzjz.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163gmlmbnng.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163mykvqbsm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163lcsofnxx.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163knucllbi.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kfmvtrns.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163jyginwiy.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nevenxif.html

================================================================================
来源：http://www.sxryk.cn/163reyaigcb.html

E. 字符串处理
来源：http://www.sxryk.cn/163vzgqfqnf.html

================================================================================
来源：http://www.sxryk.cn/163syhkhtbm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163bwiaylik.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xadcawke.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163nejollgr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163esekepsn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163exnylipw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163gvtorlvz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163bguqtevh.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163lamamtoo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163sigczylz.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163snjiuqvv.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163mxdgkttz.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163ckokspqe.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163dvyupesf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163thilluod.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163bkrgsjfu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ytaixsag.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163nxutelkx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bqzdwvcb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163urtulwwn.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163imnfpckx.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163rmkmcljy.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163escokykv.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163qyfrjzoi.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163uakjvwfq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163aehbgdpy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163omwhgsgx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wilfcfyv.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ezpsuenv.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163yicojyqu.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163sqavbsap.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uxkgqfqo.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163xbucmeue.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163vzepwcwb.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163ctptaeks.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163fwfamvxm.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163enqrxcjn.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163cgpmqzbp.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163oramxzcj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163zoezgkyp.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163wphmhvni.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ihkhpajl.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mwzunvst.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163pssfkpdj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pxdogdzn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rsqsseoj.html


<!-- 参考信息 -->