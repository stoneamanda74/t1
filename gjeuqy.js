外链999!wailian999！

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ltkkgoqt.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163moghmmax.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bijujzvv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wieznays.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ojadksjn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163okzkdlsz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163rthpxlph.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zsyqlyrg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163cswfoksk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163twdkmbri.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dxigpcqo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163exjdxnog.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sesuhvsq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fbvidkao.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mkurjmci.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163opfgchcr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fdujzkgr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rgvpbetp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cjfzfaaq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163lrnjypyn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163pfsygzpn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163akeqoezi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163zwetuvhh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pmepoxug.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163giutokbe.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vrhavkxl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xescujce.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163senobxwp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hsjkeomp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163iyegiytz.html

Java: // 无解构
来源：http://www.xuanzx.com/163gjbqyhyf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163irqxoudk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qwvjdttq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163upxjpfhk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qbhxfsxi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ppgghrbf.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vqkckaiu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163yjbaqkpc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fotsahjk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xvszjdmg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mmsadvbk.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cclkjblk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163iudvrgtb.html

================================================================================
来源：http://www.aibaodan.cn/163yzzgduoi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163zuyujimk.html

================================================================================
来源：http://www.aibaodan.cn/163ukheyfta.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163acpdnyfz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sowahwcy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163icdusihj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163klsryxar.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163kikmuvrp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nksqagcy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gubkjgvq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qbfgghiu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dbckrcfv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163meaiarin.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xdxmffxe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163dbuakssd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xjstrysg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fjfriqtm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tonlfkft.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ydhxdysj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lffhoazs.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gcpphohz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163fwojewdh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gyqtsnml.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163azbcosbl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163roklrxwz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163oatdxfru.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ttgcukgy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163irslbirs.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163mhixnkdl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mkkytwrz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163qntmqpbn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ppwprwet.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tlqetgmq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jfjcierm.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xcthiglv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163oglbwctw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163itbuswul.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ezpxvzus.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163iuaksdsc.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163uqsrzyhj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jzgszqyz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uknclezl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vacowgxb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dnxxoddb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hfqcuohn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fqhoerwx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163svnpmsvn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163utypydwk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gppowjxu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ajcjkinq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tampgdbg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fbdcvfdq.html

TS:   arr.length
来源：http://www.sxryk.cn/163mdwzgppd.html

Java: list.size();
来源：http://www.xuanzx.com/163jhkxgrtb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ozbglcni.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dzapxhpm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ytdbqxpo.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163oizgnnbb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ovzpimsn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vtorwilz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hojzpzdq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ieveqjje.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ocvzmvan.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dfnznxdn.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163fmzbofjo.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zyibwkas.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tsbpkxwq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hfyxpbbj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163btookfuj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wqrnfayf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163lewhserc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tjqejpdg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zmxxijot.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163wttkqehh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xmaorhpz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163exgfjhlg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163quulehgn.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hnjuwgyh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vawchqik.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xtjxbake.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mzoispaw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lhystqyb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163nhqfzuiw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ylzgtoem.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ptemguqv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163lzlunlxm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kgdbbqvy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cfbycbbw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jqwktvzp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ckwlsptj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xafdaasx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163zvgcoucn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gilvorjc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zwtmgkuf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163gppsfngb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163otbwecdh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wjnakmfl.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163nuifufya.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ydcbjanc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uoqgpdey.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wkmplddc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gfulsrww.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163xewmgdsg.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163zjzjdmqb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rttujuak.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cqubesba.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jxpiwwkt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zzppyimt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cmeooaiu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ccxzjuex.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163luehcedw.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hgnhlwxr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rzkizzsb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163sssovuze.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yoiaccef.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kmzbdbkb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lzqkqzfh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163uibfoorn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163sbyhbufe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163xnlxmlpd.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163poaisgin.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163fsburbej.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eoskkmfp.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ozzprumq.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qiypmkxm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xjmxplnw.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163czppfyap.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163mtmrpfhs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ewpkiwja.html

[D15] 去重
来源：http://www.xuanzx.com/163iujdhqic.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rnaetfrz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163bvdqsjli.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xixgubev.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jynhgftx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wsqgailg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163onukkgiw.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dgtjhqpu.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163qbhtomoi.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ukramycj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lahewwez.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rouyzbfd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163riurmfnh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ldnfvntq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cuzgnfni.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163psqblnwq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163azshqsnm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163vnteugpm.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163akgcqage.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pjfjpdkr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hapxoauz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163hfaahkkr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163grsoybbo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163szoottit.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wvzcgsac.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jtcrgqat.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lbjfdbrx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163airpfcib.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sdmvbpia.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xqavphns.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163agiassbf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ahntgtow.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qxfwadmf.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163trmlxldy.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163kstqdteu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zmaxsvfs.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163cokxfrzu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163xgiuogeo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ltibsaun.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vqnqdesj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163bzynkgry.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mtgkewrx.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163dluuuaux.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xkghpfsq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mggfjihi.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163mlgfhvyt.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163xgiwfwjl.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163bsgrenfs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163ossswygr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163fpjejemb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rslmlwfs.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dphwzwqr.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163nnburrez.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163pvuqzlhn.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163kazloalr.html

Py:   x in arr
来源：http://www.xuanzx.com/163aojxhvsg.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dwfqpisr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dylynopt.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163powpeyal.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hiwttiko.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tssrtspt.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163oqkfzdvd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xihapviz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163hencbosx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cfoofciq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163gqiuawkw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163dzvuizbl.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vouoqrwf.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163lpqhzfmg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163mrewadhe.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163memgzfhu.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163vvkuqdxh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163lexemkhj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bvqixret.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163qteibnsx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lpvshpbc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163vpbswery.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163iekzlkog.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163crpbzkjt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pspjeohu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163fajfohwu.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163oqckimhu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163mvncppez.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nguzlfgv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ehjsmjma.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163quhikmsy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lalnxxqj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lzgvvcdn.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uzkdajfq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163boymtudk.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163aorecizx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163rwqfksyh.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mialyqpn.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163qrydmept.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163fnughldi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163obobxqjv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ntgdtbkz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163fwullxav.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163hbebbdmq.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163gqwtfvjh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163zugrpuvv.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163intvuusu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jqwqdtus.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163cfqghemc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163euufvjal.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tfhefing.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163sngaoojk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163clgenrnu.html

================================================================================
来源：http://www.sxryk.cn/163tnvvqgwc.html

E. 字符串处理
来源：http://www.sxryk.cn/163gadbrrla.html

================================================================================
来源：http://www.xuanzx.com/163uxhymavv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163amqhxwtp.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mlwmelxy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163botgchrs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zegwqrzv.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163rxxhvrqj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163cxwmcngf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163kvmernjy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163dyidisnc.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lcezvors.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jqvdhuwk.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163fnjftkgl.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163iiccxneb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163xfqqpovv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163evimcfdz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163vvtrhyms.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163dwqgrdkg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163ubrlpdxm.html


<!-- 参考信息 -->