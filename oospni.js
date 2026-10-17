外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yqciinlw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163azsaxvus.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jenkqcxe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fcwghxzz.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lzjvlqgu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ssaojelm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rquguyxr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ioirwgmy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qbldseow.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fvmxzvye.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163oqeskakj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rjzyxfvn.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qmlxwdfq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zxikzovz.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cnpslfkj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gmmbjjeb.html

================================================================================
来源：http://www.sxryk.cn/163tmtwzrdq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163epxgscdh.html

================================================================================
来源：http://www.aibaodan.cn/163hhfltntn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xlgttzuz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163mkcvqpwq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ctadfdnd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bdtafpzg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163tdpccegg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nwiuqnsc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163gowjjiab.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kwzaddrb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jzfxjiql.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mkoklxfr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vhigznjj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163rmnahhrx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yjkntltg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sbsuepnc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vopeggwd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lmmuaeis.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163lyjihcac.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163oncibirf.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vykiymdi.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jvnjbnxo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163sduvycrt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kkijmcoc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jhiybwmg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hkxfiizz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ojcvlqry.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fxhdmgnu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qgajingd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vzxyeicn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tkcxcrwx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rdokhwsb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163csyufnlp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ujbwindi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qirejlkr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fjhioqzd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mlmsqnse.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ahjernhk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oipsbhuz.html

Py:   return a, b
来源：http://www.xuanzx.com/163xbqjjyqz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kqirhoid.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xgaydlvc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bmtlggff.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vchkodxc.html

Go:   return a, b
来源：http://www.aibaodan.cn/163sgidfctw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mdajoaqe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vlcdaako.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pknfcupq.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163dykiximp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163uhldqkgb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ozkbrsot.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tiuiprnn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bvbwtkvl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wwryglqt.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163imtheavs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vxhtsnyw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ztwlinyx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zfrxdhut.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fylmuxfs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xsiqvoso.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ruojeocw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ubucramw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163trhqfivh.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qfrlclpi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qfnlrnqd.html

[C08] 闭包
来源：http://www.xuanzx.com/163ciiqiuvu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ewiazhgi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zgabxikr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163szmsgjur.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dimvoijm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vfywcbgz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163vxvjgmyo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nwrrmdtn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ctssmksq.html

[C09] 递归
来源：http://www.sxryk.cn/163ufznilyr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163impgebnp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163svsognuh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lervpcoq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163teawrtzr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cxlngloo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xdyzckap.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gdtiklzg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qnqceplu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fkwcuorn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163fbbtnaxy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rorhvnco.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zfadeltp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fdhbihuq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163sujxiexo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xkmhncdg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gbxythet.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kdzsgbxz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163spxujnte.html

Py:   from module import func
来源：http://www.xuanzx.com/163mpmxujke.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163lxhpgwqc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ummyqznb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tngbsldm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ozyxojco.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163noccmpoj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cpaowggk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pongzint.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ecgrelyc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163amyagiul.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yjyprqav.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qjmpwqpb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zeokrkut.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ezeembjq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nvierdfe.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163adhrsskb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xbupkpxu.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tgemrefh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163icykbnxz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wcuguvcv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qkeyytbs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rlatelrw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mjlklvwm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163zitjrtwu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hrqwhkzc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ernlmbly.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tmmfjack.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163mkiqabqu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qiwfzlgj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163kkubzaaj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163srlrygti.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163puprzeyd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vlubfiqg.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pogdvant.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163oyomzxhu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nhfohbjh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163opzqnybd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163pigpcizm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ujszglal.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qcptjwha.html

Java: // 无解构
来源：http://www.xuanzx.com/163agtkisfp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163twvwncrl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dbqfveob.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zzmbebul.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gevzqzgo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163idgiebnc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163eijlntaj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163uuwvanoz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iuxbkwnp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wivjrvvq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ziokmqsy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tzszmbhb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wgiowpmi.html

================================================================================
来源：http://www.xuanzx.com/163naasthae.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qtlhbqap.html

================================================================================
来源：http://www.aibaodan.cn/163fjdwrzvo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163owspkmtt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ktisgxdo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163avhsahhs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mtxzsbjx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163fyqtjypi.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163apaiqtmy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163biwpqipz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tdhlxasu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xupozxqv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vlliwrhl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163bsmefydd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163eyiuiliq.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zbkyagrp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163umhbztvp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rbrbnerd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fhvycfsi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mgojpgch.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zcazsyhi.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163btgdmpfp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xrebqisr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fnhmnxyk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fotfvhwj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gbqmmhdl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163igauoexn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163marnauej.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163drvbbqme.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xgznvbvt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163rmkbeeyu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163geznyltm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lyptorrb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163uwaxmwzh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163leunvifv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163libwzjce.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dyoyrqex.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nmihkgrb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tpetvwlo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163lvxgaouy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xwigfkzs.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163akqzpuem.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163irficxdk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xdargzna.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pefhidvx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163eriasirw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xlofwgre.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163egnbjxrw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tuzuskmu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tbkiqdll.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dzrxmrzs.html

JS:   arr.length
来源：http://www.aibaodan.cn/163oelehbcd.html

TS:   arr.length
来源：http://www.sxryk.cn/163rjsmtfmj.html

Java: list.size();
来源：http://www.xuanzx.com/163ekpqdfeg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gkgkaaol.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163uqmkibmc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rbtyzlkp.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zebfbqaj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bujtzoyf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mpcsviny.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zcjjaafq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gyxaxjbs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zfpcvzzg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vxcreirj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fplouowx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rmpvzoat.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163jpvwdqsf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163alonfhns.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lxmbnhdx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ihlocncv.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gufimmkv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163lshfprtr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zwngpnct.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163xrhlivcf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163qhhozand.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163hwhwnvbl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xyezlfoc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163fvqmlsay.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163smfmywzo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163sfjuvzew.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163vfjsfgpr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yfhkpveb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gkrqxthq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163sayrrgiq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163zqaxnztx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fueombkq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oacacqje.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mrnhhcnz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ztcpecgs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ehqhlzkw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163eirhtoxf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ijcbfkux.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163xywxpkhg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rzwiytzq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yzcmqbxf.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fpajxukh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qcgukbae.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163sczcxtxh.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163qdwblkuu.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163awnfzkmw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163gxyqkxjr.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163bgpwkqxy.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pqpjvpok.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dqfyhrnn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wedyelyg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wdjchjqx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cwzwskcz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163iuqoebio.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163njkalszq.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qswgwwhb.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vqsbochc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ewhxhfyq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163lxnbudmg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163awgfxmbb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nmbdkjlb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nwtczgmu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163wwtlebxk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oofpudgd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yiimcptx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163yfdmiwcv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163crlvhlih.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163vxtschnk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163owsqffsk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163exksewxt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rnbyfrny.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163pzpapkin.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163wyjzkuws.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ftwzuwmw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zppjbubd.html

[D15] 去重
来源：http://www.sxryk.cn/163spqjhjmx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fzwwazer.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163goqeauyo.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mnqmluzt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jmilsuyc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fncnqldy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ucaqrtlo.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lbudhyec.html


<!-- 参考信息 -->