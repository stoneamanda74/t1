外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ilreakxi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lfcomkuy.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pjhoozue.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163yugpshpi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163raontazv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mbgazqnk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163crcqabzl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163gomrwkkr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dnarscor.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163osoypuii.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163lqewqbpt.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163eiekgbcq.html

Py:   return a, b
来源：http://www.xuanzx.com/163blhhwuym.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163czccwyji.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163brtdblal.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lpggpwyn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jabldzlr.html

Go:   return a, b
来源：http://www.xuanzx.com/163igaondvn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163urybbcwy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lvovdzya.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163omygjgwc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ykpfxbbf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ycngbxen.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tuteocki.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rlvfoycd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163cfdqiycl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qakfjqck.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jokxfkdo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163uaypaxet.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gpgvabfj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qemoupoz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163odvbrvnk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vgfqyedd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ulyjwvji.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tzlpyqih.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163uypbnvds.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163caqbrafl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ycnqdqbi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ykgxiaba.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qyrkizju.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163dfgywort.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kcapyhbt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163avgzazux.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lfuyqxjg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ddaliclm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163roctefkf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163swjmyinl.html

[C09] 递归
来源：http://www.aibaodan.cn/163suodqswz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163flugvfbx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163djhyjgew.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ptdtxhug.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bymuuoxq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bahrpnia.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pogyofzl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163djzkeqsk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163lzpmhayb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fkxnhvls.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fymnxhpw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cwdibwdo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ehjrgtem.html

TS:   同 JS
来源：http://www.aibaodan.cn/163eluefbix.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163snrmizfi.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mjtzxmzp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sgbifvfb.html

C#:   块级作用域
来源：http://www.sxryk.cn/163sqdohyyo.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tiigsorj.html

Py:   from module import func
来源：http://www.sxryk.cn/163irszroji.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aubzfnaq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xlbrzzby.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163byffsjti.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163qiaeedht.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kwmhewwl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mobaivpa.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mnsywone.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zqdvqfds.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ofbstpfj.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163owcelkym.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163avhamgrq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jsundtvu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ywfaxdqm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gkmxvoby.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fzabtnac.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163cmmfobrr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163elsoomum.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kyoabfxt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zqzzdsxx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163quiesckl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pvmjskyo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tmezazai.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163belerrvd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rifvkpjo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vnkadkvf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163opxsqovq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163pcftagyd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hefrlfbd.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163giudgfsk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163cmnqxeks.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pnuwfnrv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163uruwbtld.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kteufuuo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bzczebzm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rwldxnuj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163yvndlqnc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rroncgav.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dksvxlzb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163yipobmyu.html

Java: // 无解构
来源：http://www.sxryk.cn/163dnmruzec.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zyqkrsqg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ptekgscd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cuhrqqnm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163obxubdnv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yjksvrsq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163oikcgfgj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163heownsar.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yeppnynv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lxjiizjj.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xzrbclvz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ikmgmfws.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163azshdfij.html

================================================================================
来源：http://www.sxryk.cn/163edkfgarc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cdvtbqzk.html

================================================================================
来源：http://www.xuanzx.com/163fgzmusst.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163shyexrox.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163imolmigk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lestatuz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vnrtmclf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hnjagehp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iwdabhnb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163rvslsekl.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fsklgktj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mqjlzatw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163oqkwjgmm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163inbrpwke.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dsrpvcpo.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ockfpnvx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163msihtrfd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hbhodwku.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qhnrzlln.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163euypczwz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vjflivox.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163oszuqwqw.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qomdwjqr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163tafchjly.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163eluolxln.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xzbdnxns.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163oofzfalv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wmmbchgx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hvxznrzr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gvwpuolb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163aijaqabd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ttflipob.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cwlnyedz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zrkqrtnt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163sfhyogfd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vmlzmsvw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163gxhndckm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dswtclef.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zmdjdnqp.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163fjfnibwi.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163opgctelo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163esqpwjvg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vcborqmq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163umyrbskw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mlfgyrhj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163llognlmp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qujtwlzw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163asavooci.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cvhjtvyz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163tatsgcjc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163skfsffev.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rjmujeoy.html

TS:   arr.length
来源：http://www.sxryk.cn/163eqjqtbvh.html

Java: list.size();
来源：http://www.aibaodan.cn/163nacxzrvq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163znqlmkxx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ukanrpde.html

C#:   list.Count;
来源：http://www.xuanzx.com/163igbuoqxk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mpnfwcnk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nlbpjugm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163fkejzhmg.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xmwzpyqg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jnoacnto.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hadlmktz.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ififgjqg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ylyuxmnh.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ciccmajp.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163enhzpsyf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163myxnkbry.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163irvoyysu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163epcdnbnd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cjdblkww.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163caunrpbh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ibrzamlh.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163xmptrcpm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sycuawsk.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163moqgtasb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pnptkmex.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163djsbcjcv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ubhzujrj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zzukeqhi.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163apkgjnho.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zuiliqhs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rtoxapwv.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163agvvebja.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ylbbcaxj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kkwumbqa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163blfpzvfg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wdpaejfk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dkhsfckc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gscqbzzh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163kcoqevdi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163pfkxxqcq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163haqaevps.html

[D11] 反转数组
来源：http://www.sxryk.cn/163fvmlktpz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163dicnmvql.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163czcpfxpz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qksfillj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wuyowxfb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xyvxrgac.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163dekuvedl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163kmoikqss.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xymwzimd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mtuondkd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163salprwgq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qhiuyoat.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bcmrutei.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163haeipxbi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wqeyplnr.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ljtxbgtq.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163lcwfeqfz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163noccjknh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163eaxrbxvi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163yecabjgk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163caqtsxrk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163foltfysy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yrdvtprh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163xwryzhbf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163dwiuzplw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163lupxlqpp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163lwawkbov.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qqvgaasl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lpvxgute.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mthlokgj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163iomahmil.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zudyyedi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fafozhzu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ujrysgqs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163srjcvqbj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ymdebsnj.html

[D15] 去重
来源：http://www.xuanzx.com/163nxdeprls.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163usrsfpsb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163imwukfvr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163utvuhthu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zbupuhtv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vhcxfara.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wibvxsbv.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zifdbxjt.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wsznjvpp.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163xamcpnbf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163gncogvhn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zzmsemob.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tfbjjepw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yjfwzfxn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163efbiohsx.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yericjog.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ewufzpqr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jptkikdw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163vxjftuyw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163eypauhpz.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tuylnggw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mjycvwoi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163eskfncju.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163gfyqddww.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163aemfgthm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163yxrftfox.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hjhbijey.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163tjlodfeu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tuxuhnkz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163glcqymkr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163rmlmrwpo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163irggeecx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163umgmzeyr.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163dxaozhpj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qvzkxxop.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163dpzwkygi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163giwhgwfd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xtvsxysb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cpcnrpkn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163wvxyetak.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qvchfmcc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rzvxwknn.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jwgsvgzq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163xeosfulr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xwxheove.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163xijkjkfp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163juhxoupf.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163hscdqbjh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ogrjxzux.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vkorxitx.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ywkzmxbn.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163pvliwxan.html


<!-- 参考信息 -->