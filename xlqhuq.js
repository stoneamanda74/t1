外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jvdehegm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cmbdebdd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bpnwcpis.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uviteotf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dcycrtom.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163encihyhu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hzmdmmxt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nlcmfoiv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163efditvnc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fcftyeuf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163nzudbqqr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163zzwwtgqo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ikbjosbg.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163xiezgnzf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rtlnffnu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ichdtpsc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vlumvtga.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163svbadmre.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ihzeohpb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163vjwdrxsz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163aqxsehsk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hoamfkjq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bmyzyjgu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tcjsyfvk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ffzjbwnr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zswvswep.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ggdzjklc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mvtoppar.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xffpyuvm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mazqpehn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tcwpcwhs.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xqowxhub.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mizmteic.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163siodpblq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tuhxdnzr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vxckgant.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mafpulaj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xphnaxku.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163cgwaaxmj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163uhtrydaw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ooytvkas.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nenxiqgf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hcdbotpm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163owgplelf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163erwgopzd.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163berkllbk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ufyeevdv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bbrabsnv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fqeaaymt.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ueoknpep.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uepzpsjq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yejjqmtu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ebawnqxi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wjgckddx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tfqeslcg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cfkrlyux.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163nftamduj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163uioeyrmx.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kwpjabsr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163klrkykcg.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qmsdvqwf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jdmuijpt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lgqdpnex.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cbloqjnk.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wwxqybmo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tjxbgtgp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jxpatnaz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gnabznca.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163gsjywlsm.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zalftnvv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163tljillpt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vcotlvqk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163jzznqzqj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163krgsdiyi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uuwrgbbb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zubflupu.html

================================================================================
来源：http://www.xuanzx.com/163hxbuwcky.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ysrtcznt.html

================================================================================
来源：http://www.sxryk.cn/163zisfqgkx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mxspkayf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iziqjztv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dvavntxq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tujzjkbb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cnipgqmi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ttszrvlu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163nmpbgini.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lifskuzf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kgptnsna.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163oirstjzn.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nbtcdnuy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wmmcrupj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163sdkxybut.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163vynvasiu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tcwrimzc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lgbatybu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vzcxlarz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ykjfqcwx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xinkqgvo.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lpszkzrd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163trwxoafp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lqdipkwg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qblradvc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tkvvoddu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pubqugec.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gfearwkv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vumjdvru.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vddnfoja.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ljchqeuz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zzrukiul.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gyrqaujb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fgeoroia.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fpghyqfj.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tivcfxft.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yujjoukl.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yjticevr.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lfayzvfn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163swwahadt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ahbcedcx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163xwibtswz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kbznkdeg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fvgiegwp.html

Go:   return a, b
来源：http://www.sxryk.cn/163aksfimho.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fpwgeizs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163twqrbfby.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gmuxkpci.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ahklfhok.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163uspiyzgr.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fjfpmvyw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163lbifvldr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rpwtofut.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wzpmxkno.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fimeqabz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lksldago.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163khvuzpen.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163zbxfmuen.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jbvbdbmg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163svxssdmj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ocpfyfcy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163umyrwuug.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mgauhdfi.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163pmvmfltr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bpixnqza.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ccxpzmog.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vatjszsd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hebjiiuw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163twjuqjhg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ycgtgyuf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hayizmvs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163lgdccepc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163cmcxiyya.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163utzycfgf.html

[C09] 递归
来源：http://www.xuanzx.com/163klqsqswn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163pwjqaakd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163swmtrklu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gucrxkdy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163txeqkviw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163djqprgje.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pinfmehf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cnjdmlgr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163rlpvzyhp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xlpwwtkh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ngcwlohf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xhkvbmfn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vxbvuing.html

TS:   同 JS
来源：http://www.sxryk.cn/163deaxzaqc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163suyfpjrq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sgaxowfe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ydwjavab.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jpnmhghu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zzhntsls.html

Py:   from module import func
来源：http://www.sxryk.cn/163tagqipkn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163acevhahx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hdbkvrez.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163peeuzker.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163karsulau.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zymbilyl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163kqvepxvk.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163khjmikfp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163csjjyolk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163oicjcscc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163qpuziefc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cbeyizfm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tdslpnlg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lbubffdm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163opeqvyvl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163slfyevdr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yanziezj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rxppomiy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vofqnnyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ubcebdcd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xlsmchzh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fazfcgwk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163absiwtfv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lwdcxqps.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ikdthwpw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163urdbnhiz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ibejrywq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rsrbujbq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gvuwskki.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iiipfoni.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163iyncyoah.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rwhbzpli.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qxhrsetq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163haeoafag.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rrlvpvoz.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mygkltsv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cmgujebu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cyanrobk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ibcdsppq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pvxtcugz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163smoavwnl.html

Go:   // 无解构
来源：http://www.sxryk.cn/163tcoxxvkw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ajqtuybk.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wdaiwmgv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wiulzinq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bpmgivcx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vepbhtgp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zunlqetm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163amekpdxi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zwyaysho.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ecmxmhft.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163bvtidxyn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gqosmfep.html

================================================================================
来源：http://www.aibaodan.cn/163kqinvfay.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163tgqyqbpp.html

================================================================================
来源：http://www.aibaodan.cn/163xqekthwj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wpwcjzdz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163beobcinr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163oaownfih.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163crmtqffd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rsprewhz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ffocuuso.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zsmzqpoj.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163zeoejemt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qszuteer.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ihkmnajb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mckhcodm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cuzbrqnu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mtbamxwa.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163abfwvslj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vpghritv.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163appieytu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dmabwcot.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cqwyduvc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163barxltiu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163pymjflof.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163hreagyhg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qqpqskgo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163oycfvuft.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163iqfbefbl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ghpenjvg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rbofrvwj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gagjqxsb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wiucmloy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pnxxrdgs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zbeaxspo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ntfboakw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wweuqeba.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163tuijulqj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163tnwobkvv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fgtmdqse.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hjjwwozj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dkvatvtf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bayqxgko.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163fclwtizm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ohxarnid.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163qjrbhgfx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ssavdwvo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xeduqvyg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163icjinlyx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163djoxqbde.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lwwvdqcm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vusggbum.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wsudpask.html

JS:   arr.length
来源：http://www.aibaodan.cn/163telgaxop.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rsblzfxn.html

Java: list.size();
来源：http://www.xuanzx.com/163iqsvmsep.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ucjsylkq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163mkloyfjc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uvjcyyvb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vburthfk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163bdycrvkv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163motoznji.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163aayqavnt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dmepivkj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vrhfmjjm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xlvfxxoc.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wewycxhk.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163hjxjixka.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163vfswuzkv.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ppuqqkni.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163llhmwcpe.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nfikyyoy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dmzginmr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163sxslzurj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bogurhds.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lnvljtbu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rleyczbq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163btmfdcwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mbjngzjv.html


<!-- 参考信息 -->