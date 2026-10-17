外链999!wailian999！

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163pjoawfsl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bnniohqg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vjqqiotk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nevatuod.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yqurcxcq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163uzrnelcn.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zqnnwssh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163lcumoqcg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jlgyfnbe.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163neilhorp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163efvivedd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qhhskahr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163yfntbisc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dlvjvluq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bsaiwsay.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pnbehvet.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163thhcefvh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163emqmfckd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163oaogdcic.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163yvjvrjgh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vuizedyj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rjamkjzc.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163axlmzufs.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163nrojpwco.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nnrfrfcf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163skyfskwt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163zpqptouv.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dvsegoqv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wgpynolz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163kgmtbaxx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tyyrhsnh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ahtpourf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cuxbsfnc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gjoqtqul.html

Java: // 无解构
来源：http://www.xuanzx.com/163ktfkabas.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fnpuehyf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vfkplnsm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ehqkyvcl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ewppvyka.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xoqqewmv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ztnrvoaq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wcdqfore.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fsuszsdd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lcpfktjt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163totuqyfl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163afhqxisq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163eznrauna.html

================================================================================
来源：http://www.sxryk.cn/163unysmriv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163smsnokim.html

================================================================================
来源：http://www.sxryk.cn/163bnjmqdkj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uvwcgpwx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163upwvorgg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163arxwjjbc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ngroeohw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rahfdevy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ugkpvhut.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kanygcrb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jdsxanzv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163dakjskfx.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163faaphyhx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dmifrfrh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wccxxnhk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163qqewiybm.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163jebzbomg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163pohoaowb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163movegqpq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mjhnqyaa.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163joduldxz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oouvdrxt.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rdlfpich.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163wqnkdxxp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ghvzdecn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ikowgkzf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ugbesvom.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kwqcgqkx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vhstmtzh.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163acgoayeh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ljvioqxd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fzjuwuji.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163urkvatbs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163hvadugmw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gifaqxjn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cuyavsma.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tswivjxg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163dfimzncw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pagyeltf.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wenhwokp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ranvygsk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163aukujklw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zzuhdqzp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qqhluhun.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163lqiwgabg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gzhzchws.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uukuutfx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163tftjehbq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bsexrbsu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xvrqpzkb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163epimeyjj.html

JS:   arr.length
来源：http://www.sxryk.cn/163yeahxraw.html

TS:   arr.length
来源：http://www.sxryk.cn/163xiccfuly.html

Java: list.size();
来源：http://www.sxryk.cn/163bqvesgew.html

Go:   len(arr)
来源：http://www.sxryk.cn/163yhujtzvd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163oljdjqsg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163egkcfcgx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qdsqmdvs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ukabetoj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kvlnkijw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ogylsyxc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163vdroosrg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xxuvpfgf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163inblwqlu.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ayhycrxs.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163pxrmgwvq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163klcsvckx.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rzvynhcp.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hdtpsnut.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163kipnzavy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qrvddaze.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xkanhwcx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iwxmryec.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ovccurst.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ukcwwcgh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cakztygc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163engqdqkp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163sjrvmxgx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ljnjwpgg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gueazlak.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fuflmdcz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zhzvafof.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rsbfpnog.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163gxfwmrda.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163slabfpih.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163svrdkheh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163edlovvzt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fgvbrxvb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qouhvrfr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zswmnilh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xzciioiw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163hatttrza.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jnyoluuf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wzwbidpu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jzjvxjeu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wqzqktbe.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nktiybeg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cfmtpfnf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hhgivmip.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163icunddoi.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rkhknygn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163shckugqm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cjtdcutq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dunpgkqu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163sxwhkmrr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dhwpsmnp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zowgikwv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wtjppzve.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163newicndh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163ozkqmpwy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163elicoxjq.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vwnymagb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163stfxcpbs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nwlrvaun.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163floslmrz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kpgxqtnr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xydceuch.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qszljdvq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jtdplabr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163wlbmekww.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hzozyhaf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163plxmzkdh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wlearuir.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dyapzptw.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gkflceuk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163njgxufuy.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163iohcdama.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qeldvaab.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163hvzwurfq.html

[D15] 去重
来源：http://www.xuanzx.com/163vatlmfmh.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fpbvwbmx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ctyihxfj.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kkmrwguv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163rtjtdfbk.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bwoltzyx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163cnsakvsg.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163yagyomwe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163dzqvcezh.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dgqtkagk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163umxfqjeg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zplzykut.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163eyesscxc.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rmlwofer.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mdjwthmp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163tclxtwqw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163rpultekc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163oohkfgxd.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163lgzjawrc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sirmaynb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163heczeabp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tnxyguvb.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163zayybyss.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163hvwmupgf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163alqlcwil.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163gvroawfx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fiyzldlx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ariafoht.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qqyuxjsl.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eerpxben.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163solatrtk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163yochkdne.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163vseizcdi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163bducgnli.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gxfxhlwy.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163sqxqxjur.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jwciezgu.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ywqlaesq.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163moaqwhot.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163ihbrqzgx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163iwbkhwpq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163hjwdfohj.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jbargrlu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zddhbbtu.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163dsgwpzml.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163jniczdcj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163eurwqget.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qmdwnwue.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ibrbwlvd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xibssddt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mkecpkna.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163remwexpv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163bbiyyrgf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kluvdzbo.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163dyvbplvg.html

Py:   x in arr
来源：http://www.xuanzx.com/163qydqmmxj.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vufslfif.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rffwtbys.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163xildfgbg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163halauzjx.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yvqazczm.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163efcbhkkh.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163hzlqncte.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163xhtmvfxx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163urtgrvlc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163wjwcoawn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163pcrprkmz.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vrbgoosj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ldbjdbfy.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163attzrnpa.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ohxiehwh.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pvxgfrxm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163feojfgzg.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163lfzofnon.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163wwgeucti.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163rrayjrcc.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ipkcqwsp.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ddxhivkt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nelwdimy.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163orilglug.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163norpeinv.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163gtcliuho.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pbtvdgcc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wtstwadi.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163apoumuwr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163bifihqxf.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163tajniqwc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163uizkcxyg.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163somqyvvn.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tcgsazcb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163vqicpkuk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163dpzrctxr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163epytoxga.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163iiijlznb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163gmxpmnry.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163etifhqdl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hynaucmg.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ajxxfhfm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163eirrrcyt.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163fsstyyme.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pewygjqj.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163emeymhuk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163cpvpmhmt.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163mnzdlusp.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163fzlrtqvx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163onicpzdy.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163ltwrahui.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163kombblex.html

================================================================================
来源：http://www.aibaodan.cn/163uqeerwex.html

E. 字符串处理
来源：http://www.aibaodan.cn/163yohkorby.html

================================================================================
来源：http://www.xuanzx.com/163opgytjmm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163vovtksyt.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163yjtybkqr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kjunfntb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ehiasfib.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163gactrcwf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163lkbrrfgl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cspipsyk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163yfybeqvo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nglspfrc.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163oxkkupnu.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163djgzwaqt.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ziknxqtz.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163qzryfbjn.html


<!-- 参考信息 -->