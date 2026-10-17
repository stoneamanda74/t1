外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ujrxhttq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vzhmaaey.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wdcxakmb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gpispwts.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rtguomgb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jtufpjka.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pfiyljzp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163serptwvt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tmjzirsw.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qxoqsenz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dtrypduo.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163dbnobkog.html

Py:   return a, b
来源：http://www.aibaodan.cn/163miyuhdpx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pvxqnams.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wfnepibr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zzgmztuj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163iztdcknj.html

Go:   return a, b
来源：http://www.sxryk.cn/163ixwybzuh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ndhirtyy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cbwgacid.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163frphttkf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163udtryhtc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163skdefvsr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163cjsfbumg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sccnqsmq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163igppevok.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ojudalek.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163lfpoqeax.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kddvzlxt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cgaxukob.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wfvetzae.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jiwoifda.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163numcerwy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fkftdgoi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hxvpeshi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tlnwylfs.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ubnaodly.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163dmvzqyir.html

[C08] 闭包
来源：http://www.xuanzx.com/163zoqgmqbd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mghiarlc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163znhrzmth.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qplpvbvf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163unogqusk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163caqsecji.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163flpxurvo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163czobedwt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tkdvcimw.html

[C09] 递归
来源：http://www.sxryk.cn/163rzpginmy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qmfgxnqh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hjncefsc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yhxaasrp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jtgyxero.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yzrnqdox.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dcnqnwkc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163tjfmqzuw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mtcxsppf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yyyrgbvi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rwbukjul.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163plbmeztn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163npocwxqf.html

TS:   同 JS
来源：http://www.sxryk.cn/163tigsnbcy.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hxkneexi.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163sqqofdlm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163folquvmj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163tujpcvxj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lfsuynyn.html

Py:   from module import func
来源：http://www.sxryk.cn/163zocllscs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qkbzobqj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hawdauhb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xjzlblcd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ecqemxnj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163subvaepa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xqwizngn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hhfddlkx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fkxslenr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yjwazgoo.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qnxefdhe.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lzlqxutw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jnvvnepj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xvetmzzz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qkywjedg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yszgpmwg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kjdvumyg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163neiphwbh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ogxvfqhz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163byooljqj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pdwubxew.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hiatfrsp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163obmfovuu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ywjirhmb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kjcgrtdz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wmnppitu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163akezrlrq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163exojuezb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hbmzyaus.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vafufpwp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hlatryxz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163cfrqirat.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nwjtvdec.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163unikamqq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163khoarubr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wuipqkxw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163lbxapgbb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163lhbuvlut.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163iqazrdmv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yskzclke.html

Java: // 无解构
来源：http://www.sxryk.cn/163frultvxn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163iefnmerq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yoowbqcd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163yifshyyl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163iuvglaek.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dsohjixy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gimbvcbr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163masukrua.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ydqjeodp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ptvcbgvp.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hycrbupu.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163frznzbzc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zcbwhjxh.html

================================================================================
来源：http://www.aibaodan.cn/163mcuroipw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jukotayh.html

================================================================================
来源：http://www.sxryk.cn/163hpevifdi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163woneeoap.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163jkyywcrt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dpkepier.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mvnvaxeg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wmbsdnov.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ljbkrfda.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vlcgtirq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vqqatkut.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ortzqari.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163poadozii.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163aacyfini.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lltksruz.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vyolqoac.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cagklync.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tgyhapgh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163skqgobhp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163psrbcoqm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163epcezdrh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fgumvgki.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kskbtkyj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dooaiibq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163hchgyvsw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pqjwhipi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163qspvflxn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nmqcfuqy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qyowoosw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fdfabquq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163fweegxau.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lwgywuke.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ithjivuk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163omhynekp.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fspzbvwx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mrnrrenq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bhulywiz.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lprpowcd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163iitrwrbs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163wiizkrty.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ezoslqcc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163iaxwounz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xjygycgr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163sgbewrtv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rdnhbafg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163naxibusb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ydfvdhtq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163yszwelry.html

[D06] 数组长度
来源：http://www.xuanzx.com/163crzyfznr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163buknmupz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163stwyparr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163njnkjjdp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rnvvrqaq.html

Java: list.size();
来源：http://www.aibaodan.cn/163oucsekec.html

Go:   len(arr)
来源：http://www.xuanzx.com/163dqzkhkdn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wnxejmyh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ztvkvktw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gvpqgmsy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qfhrnkxc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fkpmvmxu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163arvwqylv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mijfyrix.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zubosjvf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ekonyhzo.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tbbesazk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ojcifdgb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kpuddioj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rknoksmy.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163inudtndb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mhwnqhad.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gabdkyvt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uiuxbtft.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163pfqumicg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yrktfwoj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163pmajqrpy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163tkwvjgfc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xrenlxmh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jpyfkavk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163vzgkfyiy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bxbxdcmi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163iariukgt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ypxmiemy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xjppvclg.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bogalfnb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163doalqpyh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yzrflrdo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xaaqzkpg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163sfyctufq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jtdjulvj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fuudpbpe.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163fkzijbng.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ihfvxspv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bphjtzor.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qdsuxidg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163vooqwsrj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163acaxegvj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163wefbdjyf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ohkivscf.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163boypnprq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163mrkpofuj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hyjlodwx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163bluudngi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iqvoaefs.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tuxvzwlb.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163noiefkee.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cndloadj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163yjapclix.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pknbcfuv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rjvzhjwr.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163sklxhfla.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ztvthquy.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163jwpyymhc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wevfspop.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163aqfindos.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163llteugja.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bdyvhuew.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zucnbffd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uyclnzas.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zceysrui.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163eajknoif.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ilexubbc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dxoqcijh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163alylkmqm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jkabrczp.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hiheimsu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163zrwbxfsw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ywagqggv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163dzqmcgsc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vwlzzryk.html

[D15] 去重
来源：http://www.sxryk.cn/163vrpeaijm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163arouuvgz.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163cwcjjnmo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fxrxxlbd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gyehlroa.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zgtkhjhd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163bccnljol.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163oauajqgf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hphidjol.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163aqoehppo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163sktczpol.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163simxaxkn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163wbzkgpkp.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163duvyxtqy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dvgqbcle.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lfajndit.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163nqbhlghw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nkpoqlqr.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tqsgwdua.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163lyvscakr.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163rklhyisz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dxvdmpoh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163zgvhqmpx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vqhtjpes.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163impxugqt.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163heeewkpx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lizpgazb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qxyuqmpw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163stvyurzc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163mzltnube.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lmqgpjcg.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ojndwpvl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vekemfyi.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wcrsveos.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163jiokfdfn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163aularbre.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163lgiiyvhw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rkkdslkt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163iqomrpfq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jlymqxte.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163mtkhixst.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163hrpudart.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163sosqqnoz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ijncmmzz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ixowhmoj.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ptrryiuj.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dnqvsgeh.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163qbgbandw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163vgaiwuut.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163bhyqozwz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163paujtgyp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163orraihpq.html


<!-- 参考信息 -->