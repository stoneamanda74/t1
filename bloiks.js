外链999!wailian999！

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163bvmxoxya.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zqiilkxf.html

[C08] 闭包
来源：http://www.sxryk.cn/163wkmypoab.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vqklcvxa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wrxokesb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qocyndog.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uxwzchoa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163lodrfaep.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fylvgkjm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163afxmdudl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ywbijtzi.html

[C09] 递归
来源：http://www.aibaodan.cn/163cuzbllrf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dbrleiti.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163nmhxqfgi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nqwknfcd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163colwqwjr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bvjzvdfn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zdtlxbzb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163eciaelxg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163evfsujvn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mskucumd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gwjtygcr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yrytrzri.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163bcsrwaop.html

TS:   同 JS
来源：http://www.aibaodan.cn/163inrtezbr.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163sabfjqso.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fkpvwrhe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163cxypooxc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163yumugquj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mxcexwcs.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nfdqqpjn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vptsmjwd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163emzfhhsm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163uljftbvb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qtujmbwc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163woibxhqo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163clwmtetq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163kjowrvbn.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hytjmfzx.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qyoizecr.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xbzaaozo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163wbrzzspj.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zmqpuusj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vgfnrjts.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163koxdgzjf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xohoxgza.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vtoywwil.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163enquorvi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pxnvjdne.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163deawcmdj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163arcxteqc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tkpezwul.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163azfmiyxy.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163raupzxfn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163smvuhrzc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163cvoxgosf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163atxyrvro.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gpgraelx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163phwdvdra.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xwboecko.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163djicpkmc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163olegjfda.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dzwzskse.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163glzkosvm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iyvjslgr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163nulkkxwj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163upnoesma.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ldwxrxmx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163szjcgiyw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gfdlnqhw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163iehcsdqf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ubexnvdn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gdicbpqx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xjkuddmc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zqnwgnrc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163zqychqlr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vxxhifbj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gfylbami.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jutaevsw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wqabkyut.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tgxgjsmt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163omsywbhg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nznekbrg.html

================================================================================
来源：http://www.sxryk.cn/163jymragax.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163voffjxzl.html

================================================================================
来源：http://www.aibaodan.cn/163fysqjcjx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163nydkbfzt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gxwznsex.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xscrzekf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zigmxxba.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163vdcochng.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ihvmkuxm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jyjbnzhd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fvajuzzy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qrazazfu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qykjfntz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dhovvelo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uoclnrei.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zqtwkfjn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163flzsedqv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163lbmklslg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tufsnrgd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163elfyozka.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kmfskmik.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bmaalgfn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163oltmizcy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kyfrkadu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rvvpqeml.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rnrdzwsc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163briwjger.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dduuksxf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ywupbjeg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163txyfnjsz.html

[D04] 删除元素
来源：http://www.sxryk.cn/163cutdchfo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163yxyqzcwj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bbcoyksu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oihkebri.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ovbhynou.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rsdzneuj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163niylfpzh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163qagfeasr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bhkseblo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163yneytpia.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fxrlbihb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163pdsuhzqb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163clkzkonc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163oizjgxyc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ueqeuuxv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163kantpaub.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163izrgeejn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163iwgkrjtz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ibfwamjz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ikprnmyy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cpyjsgaz.html

JS:   arr.length
来源：http://www.sxryk.cn/163cnxwtwgg.html

TS:   arr.length
来源：http://www.xuanzx.com/163acyzwjpk.html

Java: list.size();
来源：http://www.xuanzx.com/163dbwnsxce.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qnigdngm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163eepeoimq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163hfxyfvtc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mvyghvny.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163idcfbdrp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mcfvtzkc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163smqrwmyf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qmeyfgbj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jncgkoyt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163omikljja.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wahjmodl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163mdsmuysj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163oxzgbavu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yrzgjqnf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vqclhpqf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lrjmlihk.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163chpwrtxk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cohbzaqs.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163lroamojd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163flqsffiy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fayhoksc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163cgdujoot.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ftejmfpd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163aimryzop.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qhzxexpv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jbkjquij.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nmrknrml.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163euqpbtae.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163etrdpfhg.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163codxdrmi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gafdflpl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163bxwjamcd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qysihsmj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ugfvubta.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bexymkbq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pzxucatr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163wpnxkjun.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163raujhppt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163lnztmtac.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163duvceksi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xifrttbv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wmldyyda.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163obsedzyx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163eufcwvno.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hdufviku.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bsincttc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bqqgzhfd.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163itxxefzs.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jxqovkhu.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163xoasqvnv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gtpyusrn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zknesfjw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tdcfkevy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163nruyafgz.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163auqlztpl.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163oxerovqy.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163rrthlsdx.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163mkvrgsle.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163eqlchqlf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163gjivahlo.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ijnecxiy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ccbtzdqq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163levysehs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ifdsidnp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wvcpgjmj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163aynpgtnu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wvgxtlzr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163uipisogq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kiwayguh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163emmbcdhb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gcgrqxzd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vxppjzfc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163nlaowbny.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163acbywjvt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yczkeizs.html

[D15] 去重
来源：http://www.aibaodan.cn/163uqbplyzb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163gshayobm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zscuozgf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bdjuuwfw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xxxzsekt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163cdwbspvu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163sjkdemso.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qoqmlfze.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ofhincmv.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163tpagwkxx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cogfclje.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163bzinvwza.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kjbvrsnp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oitupykq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ahxhdeeu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163oqhknyaf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163yimdcgac.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wpcpzsxi.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163sqosujqi.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ogyngtdk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163lugurihr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rgdlgpjt.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dphpkgoh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163izdddzhl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wznxkegd.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163saxkuadz.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xgtjvgmp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fhqgmghp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163yraihylq.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163whycczdg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xtrqrgzs.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163piyhcshd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163kywuytmk.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163aeyuwmjq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163xvxzxkbe.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163wsnfdufi.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163nvlzaljc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163enbmvuyo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163hecdnocz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163wqfcuiun.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163vcjmknmv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hosuufyv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ikbxfocq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163biygchcm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rrzvnrai.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163ijdnadoq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mujgbwlg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163dsshxxbn.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163apmnoevo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163fahqtzkh.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rzdmgvsr.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163bcwzypmo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zisnhvcv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cegklysv.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ddhcpjsf.html

Py:   x in arr
来源：http://www.sxryk.cn/163sqwgeplz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vinywqyi.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163riffegqw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163svnwrtdq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163eoaiouqv.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163vxtheorc.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163kqnspfna.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163okbxzsov.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163yootorow.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dxjyvbos.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163wdjekvwd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163rxpdaiqv.html

TS:   [...arr];
来源：http://www.sxryk.cn/163zvxbsjds.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163llyhaten.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wvnehyca.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bwmgmjxc.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163jyhcllxi.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163sviaznty.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163xotlbsco.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163sydqwhdj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ifbjpkzf.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163outhggzq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163yzdyvmfb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sfgmhbcr.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163rluagwoo.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163hfspqawd.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163mazquhcn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163yltuflgm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163cdwwujvh.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dqkgtqny.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163pigkloma.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jogkjtld.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163khyolnld.html


<!-- 参考信息 -->