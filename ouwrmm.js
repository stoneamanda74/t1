外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pkvrwjha.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rmuinanl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nildqaqz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163idrgxqco.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163hndpmlwn.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163pjytgjjx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jhdvjjms.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tcfgzzrt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yqqthjog.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fljpdotn.html

Java: // 无解构
来源：http://www.xuanzx.com/163fkgnawyc.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qyonnsbw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rleikmtr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zyfenpts.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dkjkecim.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163anjnoahc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163igalmchj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ozppqntn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jwyjhhnb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163pgclullb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cfynrngm.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163sxnubprn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163riejfsrb.html

================================================================================
来源：http://www.aibaodan.cn/163ptuicxkm.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163bpznqmum.html

================================================================================
来源：http://www.aibaodan.cn/163nrkyopku.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oyqascob.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rjuzfvah.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vikndape.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fssgbdjg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jyiqmpjk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163koomvquf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dcedszmb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ahzfuphb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mrdiygzm.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163suselwfz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163httsivez.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gualqqjs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ukdamwpa.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163nrqqgizt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163yaikuoye.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tebmlaye.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zvmllrym.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pzuqoicx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qdbmbzqu.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vsyzgwmz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mrianfuq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163gkzytcwb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163sbcintho.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163fbnyqdkc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163rimrzebt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gaefxfrl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rbjvfnzd.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bwhwehaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163esmcevus.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163otbigvwy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bozeqymn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163kucdixne.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nvimyhgq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jjajpmyh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163inmnplqf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lfpqleym.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163stoxmcim.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wamtxlvx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163vmbopoow.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ymwsrzml.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bgxewtjx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163whhoujmu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jqkehzkg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dpakihno.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163eclbuxxs.html

[D06] 数组长度
来源：http://www.sxryk.cn/163umblaifs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163eadkhxmu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nketnpda.html

JS:   arr.length
来源：http://www.sxryk.cn/163eghipwzv.html

TS:   arr.length
来源：http://www.xuanzx.com/163zmzjrkaa.html

Java: list.size();
来源：http://www.sxryk.cn/163ntngetdl.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qylghkgw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163huvbnucw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wsxhwauh.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yunkfvay.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163imvsphnr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pcplqjec.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nzpfrizy.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pzrriuvx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163eatshrxl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163cwqsfkmr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mpzulbfz.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163swgnatbj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163phnjkoxg.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wvujhcbs.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jkxsculv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hsfxlqqz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163whuzkzss.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163smsrmezq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163gwdqgczz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bhvffxdt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163osystibh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163oumdvkvt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163medzgkva.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fnukhraq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ghwzvnhv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rwjpspqj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ogtnlgus.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163eeipurfv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163udqiswrr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cxdnvecu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163acfizlll.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qpoqjbji.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jzsxfvij.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zruolbvu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ivwagohb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163itbaheww.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163qxdyyxwd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163ywpekuoi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wimtgwdv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163tdqeelxn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qxhvokjc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163belkufno.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163glwgzcer.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ncvbxqqr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nzdjsina.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ujhaugap.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tdyznewc.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163svjppdhg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jaecoeci.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163egdahogc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bcxzbwuf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pwgxiwff.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163oezkkqgw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163afcfaowx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vojcbwup.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163svrlhmzj.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lihyrzpm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qjsuzrmp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kgqlupsq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163drqnfcjh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nxnxnglu.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163umhmvjxx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lrlxovdi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cfqxxhng.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gshmckeh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pulnpwee.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163cpiotgtd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vmctqabc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163risiyvee.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163luasctwc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163arvavnxz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163twomumdd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fparozon.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qldtqnux.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hhgxlvqw.html

[D15] 去重
来源：http://www.xuanzx.com/163jxbgnkoo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163vmotmbse.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163zvmbaflk.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oyzhzoda.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rwocydhr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163aaxjarfm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163afqjnfoq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163bhjloltj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qonhcwty.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163eotqdctf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ijkiapuc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zckdldlu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163knbqtwli.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lfcirdvn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163fxjdaivc.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gnzfsvcu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bqpefaeh.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163annppywr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ofplzhjd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vqjbdqut.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163oaheljzu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vqyfpxlu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163bzvkfmhk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ztkpffew.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ycbogepa.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163qbjscjzm.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163vwablcap.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ersmvkfo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163wulzwrtt.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163sfvdxirs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163vfqjfowu.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kzoapdud.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tjkwwptr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163vpzflgeq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mrtlnlpm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163fetdbdue.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163hobxefns.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ydctvmyv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ahakcuqa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163jsvsvvmj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ngjftkzq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xgoljvjg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163fedvquqp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163hxszkeqm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163prspoxyg.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163vswejajd.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163vdlevqaq.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163rqupvzht.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fpnmrttt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163svjymdun.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lslwlppy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163feysdxwm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163kctwaivn.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163jbyqhmom.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ueirnxay.html

Py:   x in arr
来源：http://www.sxryk.cn/163jmhuhjev.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vmmccaam.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xbvomnoj.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163lnrxvsjo.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163xzmktzfi.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163tcllcaje.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163dsoqpykn.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163sslensvz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mptfjyvw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ykwwsjsz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wlfsxpwo.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163skimoxyu.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163oiazuruv.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163hvuzhgnv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163agihgtrf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163fsrcembj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163eqplinut.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wtavpfrk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163qaxqxfkk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163gyzybocv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gcipaqdz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vqivftuv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163qdggwisu.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vwjoblbj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163juotmkxg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mwhnxzcu.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163vunatdlc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163mfssizhd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mnuqdkgx.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tbxbrcej.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163kavrzecj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163hqzdirja.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163eyqcqusa.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163vmsidlts.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163vjvuolqh.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wcxdnxoj.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163dyytlgqn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kcbbebna.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163krzzwtdz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163bczbmyke.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qcbwwgnm.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ktpxppyg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163abrwquiu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pkyofjcn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163fgsvgtlf.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163zmrmxwmu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163psilokyr.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163erwsgvsw.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xylfvbzz.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163tcpywlul.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163mcgqxpul.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163btddmrkr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163zdzqnnih.html

================================================================================
来源：http://www.xuanzx.com/163auqrtuql.html

E. 字符串处理
来源：http://www.sxryk.cn/163shjsrcgk.html

================================================================================
来源：http://www.sxryk.cn/163ayepljnn.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163mjpwwgvg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ggmaazkg.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vbatbglt.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163epbbcnqh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163nubbtgne.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163ymdnhjsy.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kiugdiyv.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uhtofigb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163cmywtxlx.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163hldyephd.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xgbfznfl.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rgcqvhpc.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163euronypc.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163iswhzlvc.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163unqeekdj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ompvzdfs.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163lfpfietk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163lirntkhv.html

[E03] 截取子串
来源：http://www.xuanzx.com/163rrngcgux.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163poqxxpya.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163xzinsyfs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163hugmkdfk.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qsbhtmhv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163zyodxbjp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gyrerhbq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163risvxkjl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163upfcnokw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163hvwzhffv.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163stxdwemz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163jjraixjm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163eywjnjec.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163szuxukhv.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163ntaqzezy.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163qtijrueh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163bdzxcegl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163hfmuebti.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vxhomtpn.html


<!-- 参考信息 -->