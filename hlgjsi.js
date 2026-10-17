外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hzfyykis.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163envyoxqx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oxvmqdvc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163gcmgqtyx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qtkjfcrx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sxzsfxga.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tflmcccm.html

[C09] 递归
来源：http://www.sxryk.cn/163xgmzvpnd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tpkequxw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gfzwwnmn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163otlbyjdj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ssrkpiqu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ndzdpyzu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kkbwbabp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mewdqbfb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163glybvfcd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bomutphc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163nblslomu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yfhojblj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163gyiohudd.html

TS:   同 JS
来源：http://www.xuanzx.com/163diwpjrws.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163azoetxin.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163slnhijlu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163xltjpxck.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fadxiyzp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ptklwbcx.html

Py:   from module import func
来源：http://www.xuanzx.com/163vyhgryvh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163diobzguy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lgccuwyw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163uebpkxyc.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rugkjpmz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163credujmx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ihazfmyj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qiramobf.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dfpejxdb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163jyoesnzi.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wujhpara.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jsbqimji.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kktxqcog.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cuwdlskj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ixbjhjst.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pqtylhba.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vptmhcnz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hgyyetcg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rgyqkbtw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bfqwgwjk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vjqllhyl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163arvegiuy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nztdexht.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ytfqbswo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yypftsfj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163pxldjkvu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163digqwkfj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jrfggsyj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lavjucwq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xrnzgfla.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zniluyrl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bvyqirke.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vlfnkwmh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163juisqrjo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163twgmdaqc.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wfmugaks.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jskqtpml.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163gyuumgfc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cgzprdoo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kfqynjwd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sbijimyo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ldubexob.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qrmbidej.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163efwshszk.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dsmfuqpu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dheeuhfx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vheojkvj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ogfozsby.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ecvensoh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dcewegjn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163tpxvpksm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gaeubkoc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uqmvgsnz.html

================================================================================
来源：http://www.xuanzx.com/163vifazbyv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163yuslvzqt.html

================================================================================
来源：http://www.xuanzx.com/163jfmdtawc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163zwukfrys.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ssfwimet.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163tyojyfnc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163baihglgu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vhzzatvb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163asrjktcg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163lpgurjow.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zvfcprmp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mtywrqtd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tdqhqmjh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mkagkxfv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lxzeaztd.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163erznbgyc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rpbafqbu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163iydbrnev.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zgcjzmzm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fxpsmtfd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163miyyvocd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tlvrgibz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163qmmcxwir.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lndkuwdx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fjlahvza.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mccrutsh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dvaoiycj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163sgnrtluf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163fgaikgwr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jgwxfkjd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hdcqilya.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163cxhzjzci.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qzltgksz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ubhppreu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zjgjgulh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hiqyftjj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163nekelvfd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zjnrktoj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zndknoax.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163siepjmqj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eeocaxnc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163luvgpmjw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163csxsjdbt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jjmqpfyc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bnvjfosd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xqwvuczf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gbivhfvn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163bauwlfaa.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gelkuloo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wlsrernd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163dvgijtsj.html

JS:   arr.length
来源：http://www.sxryk.cn/163khyqkcos.html

TS:   arr.length
来源：http://www.xuanzx.com/163elblxkqh.html

Java: list.size();
来源：http://www.sxryk.cn/163htennzyc.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163dlbalopf.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163inarklyi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fjdhiumo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yqqzsyyy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cetfvumh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rggwyeti.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zgazqouz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163szrigqfg.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qywmkrmh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163pirjjird.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163cmupacez.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uajkvkrc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zsrcnkbc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zfnethok.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fyzoflqi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163gwaxxfzf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ljgueike.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163vjstpfvz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163nnbrbpdq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163yhjdqqts.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163drftybnf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163llxtvedp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qvwvjhrd.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nwismzrl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163aihynxeb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163bzatksye.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163rlysmzrl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163vvtgjbex.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163utaqegbw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163liottaaa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qwvhghgb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rsljchde.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163goxzyxkv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mktcubvv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163clkkapur.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163uolxiruk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nknnypdw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163orkbvomc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ejcjafed.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jqfqtksf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ievzoziq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163mbyczjuz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163uvcaverx.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163biowmnru.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ajdptpto.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163grkpkxpz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163npkxvepb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gdyqygwk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163puzkmrco.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uxltlbky.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hfhlvgho.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lenlrify.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jmwhjcmt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163krbijfnc.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163mkmziret.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lcaudows.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fjpmoaif.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163plkdaleb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163lsjrbyrz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ocwdygcu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163khumncks.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zzkxhscu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zqpwtyry.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163psyavmjk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wxqcbkmh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hhptplzm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qsxpdmda.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163aopkgprz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163mzkctbed.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163poyzdqqf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qhkrqppq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163cvcizqis.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163yapfzjxy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163uvwhoubz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163gjichaot.html

[D15] 去重
来源：http://www.sxryk.cn/163snxaqyie.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xhinfith.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zjdchptt.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mogmslvs.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jbtojzfe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163bdrxvqyi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163dpvvsxsi.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163glxqqcux.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163sssbvhvq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163butpishm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163mbxvgbbt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bifuvhve.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xtbnbkca.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qbpziqfl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zsaafpgj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wuetcidf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jkyrwhve.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wgpqjwmo.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163usxovugy.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ralzxhhb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lvlbcrcw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wtjhrnio.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163macydltf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ngdejmuo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163hftbtjkr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163rcfzrccb.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163cmwnczoq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163xarmzbdc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163iahbhokh.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jbyqqbux.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pwdrryzn.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hkoxoflu.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163hzcsvdni.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gjyrkqks.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163nhckswip.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163smhhfsdm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163xfjiixda.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163rngkztuh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wnaxpaxx.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163yxaamneu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163giubyemv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xsmsfpvs.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163pgkjwjxd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gsahmwtd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163hasxevmx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dzunqavl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ultqnrfv.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163pttlldcq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uxqwwwgy.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163iouysgjc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mgorjmpv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163dbllawsh.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jvajlzpd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kkfveciz.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nprgrqvy.html

Py:   x in arr
来源：http://www.xuanzx.com/163ufhruccu.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163jufzmeja.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wpzxcvno.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163qjxfuvwy.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rsggggvn.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cwcpakep.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163nzvoychp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163hheqbxjc.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163nosjhbmx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163uwzarjif.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163homfhzse.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163qzniwfdq.html

TS:   [...arr];
来源：http://www.sxryk.cn/163nmliyzrd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ouoojghn.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163dlmmcdjh.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163mfyzijvq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zvfmbvcy.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pdyxwyaq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jhwxoure.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163nydsmwhw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163pauejabj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163sfkopyxj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yextybll.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ohocbprl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ufbirnih.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163elgerqza.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163quszvrau.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tqmlrxiw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163faqjdcgs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163tpinikhj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163zuzcsilz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163eyighsfr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ntksjejp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vcpiwllq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fmloanns.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163bxvderbl.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uxmawmsk.html


<!-- 参考信息 -->