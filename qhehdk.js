外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163lfantmel.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pqjtpmkb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163biviedzu.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jtqmorjx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mzwzqoxi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jiqvmirx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gxcsspiv.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zcdlyxvw.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163vfwyqvfc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uvqhofto.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163osmmlumr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jrfcttci.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jqnphlos.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fnihovut.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163rsywkril.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qjewrnqc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vdnniuvs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pfefigae.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kkcolmdc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163wianymlt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163iunmcxmp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jvmcuqzh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kuaihcah.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uwroahdo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163szfgzekj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kvzofayh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fkdiqhzi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mkneytdk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ztkekdzf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fnotgjij.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163djvkvqpb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163sxqgjotu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ulwumvll.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163qvrwgqfm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163alnhsfic.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gioghaxg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hiuvftud.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163yjxxmsle.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ieovtesi.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xlcpcvtd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hsmuubij.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jpjztbed.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qvirrluj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163uwdtgfeg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zznkelic.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163viajebfo.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163qnfcmrfu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jhjswmuw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163syknvdbx.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163jvmzqcbg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rrfjsaqf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163grjsrhyn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163kzfgshxw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rbcrpeyq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163trhyphea.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rujnidlv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tvwnafnh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vqgatydb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jdrrlyzx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gphetlgn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xszeqjrc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zisdhixq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fgluvmjq.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163viqnyhky.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vtngvrgx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mmijsepz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163eveffnfl.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wkqngsik.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tytitmzs.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wlpoisxb.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163diwnhmrs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mrnymanx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163iecfogyh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163nabjzwkk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kyknynov.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163gjmghkvt.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ajaxcdbg.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qpcqmmuk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pbeptbrz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bmagdmjh.html

================================================================================
来源：http://www.sxryk.cn/163wqgbzwzl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163uzmcbngb.html

================================================================================
来源：http://www.sxryk.cn/163ddoboqef.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hzjoadzs.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163obrdeflf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hzwrsqll.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ujjflxke.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ilwflaut.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163azqocwoz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gmtuzfkh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163eowglmps.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163knfijwvd.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bwchakkh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163paqlqyts.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163eupqretw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zpongjqn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vlwupwqt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mxumzfrz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rgqrhokl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zimzbmfy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zdfdksuk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nqqvrpji.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kayffgxn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163olmvmdeq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vznnwdqe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163khlmlldj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163fdpeqcma.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qthqssnt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ddphvofh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gberopne.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163amebpxmg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163glwrgpva.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163yfwiblhj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jncvftmh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nfjzofhs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hdzdlzqt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nomjcgek.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163deicxcmr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oxbmtucv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vjbqtfua.html

Py:   return a, b
来源：http://www.sxryk.cn/163ovowaxqe.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163awtqtssf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163migklbij.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mtamprhn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zdnsqsjd.html

Go:   return a, b
来源：http://www.sxryk.cn/163jxxpnove.html

Ruby: return a, b
来源：http://www.xuanzx.com/163iqgcuxtj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ttkvgkab.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ggfuxvyl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uzcfzcqg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zdsvxthh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xmnqhjhk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cptvxtam.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163osegaahe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cmebukjn.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pdlfiohj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163dhoxqput.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163syedgsch.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163ldyjcnre.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163whifzuyb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kxymamyg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163trnxocvz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163uhvrwmky.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qjqnjllv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163pwpjamvk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hnexgzgf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163smajwobx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163owywcguq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163inuuoktv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ntdkqyso.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aiwryxbs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uivmpipz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163fdhawcbk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163efpyfdbk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xccelxet.html

[C09] 递归
来源：http://www.sxryk.cn/163kbmhcvho.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ylwliqdu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wwokcupm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ixnjrwco.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tcpbmubq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163qogstxwy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tcglcqxk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pthirkye.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zwfhsbyv.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163uzfdagdk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zyjkttdg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tchdtguo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rjtzqyvz.html

TS:   同 JS
来源：http://www.sxryk.cn/163wzffwles.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sprsvjss.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hgmzgcvm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lozoiiek.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vnyxukqk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mjmuvcry.html

Py:   from module import func
来源：http://www.sxryk.cn/163xfehvfvo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dhwqymjw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163odwsqxrt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mqscgziv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mhoothcs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163bupctcli.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jiyvqwni.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fnehooud.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163firksrky.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vuqkiulr.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163urkajccg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163riidmast.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zgwfkdqq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163awmgspii.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bngxmrdc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163isztqigp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163penzfomy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163khfaxxjz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163orisxgjx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163txywyybi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163gdhcnutz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nlotspcm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163edseadao.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zixmhgxp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ixyefnja.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163dgnsqwjl.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163goxrlhcd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jjokzybh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gepwddaz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ilumsfvv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ghuemnqa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lzmzfmam.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lzgqmeup.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ryuxwrwt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163whzlxjiw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163scczbtzx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163wdxyjrqh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sonxwnzb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nirrxlgm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163scgimkcd.html

Java: // 无解构
来源：http://www.xuanzx.com/163hdsdqtdq.html

Go:   // 无解构
来源：http://www.sxryk.cn/163aqyqypyo.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mzbilgjo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nhmjgijw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vcnxkphf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yhmzuzng.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zqfxolbn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163iqcwcvom.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nbovrxvq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uqkxovhq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163aruuannt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vkjlgqzn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kfuqhfik.html

================================================================================
来源：http://www.aibaodan.cn/163cmblkuyj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ybnrxsix.html

================================================================================
来源：http://www.xuanzx.com/163biiymeda.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hzxmloit.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yfwevxcn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163fttnxcju.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163aooqhphp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wzkeopkb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163osahsdba.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163bdyzcxkd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163dfmfikgq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163knvorglx.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163pidexump.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163eorauphg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qxayuvqh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163exftmlsn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163krneiqpd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163huihncjq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lhmtwzya.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qjpotdec.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163orvjtzag.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ixqhypxn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rveelynk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vnyhkanr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163bkzekgvq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gxepnxxh.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163waxhsvau.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vpbnivct.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dioxthyl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dllntedk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163behrecaw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163pchsurch.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nqkqizzn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bwflsvex.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163swrnsgep.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163irapdjhs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tbvnfmik.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ynoasclz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ztigwacu.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ojkpqwvh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xlnkwmpr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163tyykuvli.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163toakanyw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163tmvkujwz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jtaacwkd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163blioxsmh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163eltrdaxi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163trmjmvhf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163nsmbwokg.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163byauqsfe.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ssjadaqn.html

JS:   arr.length
来源：http://www.xuanzx.com/163uqabcckc.html

TS:   arr.length
来源：http://www.xuanzx.com/163zaxrtiff.html

Java: list.size();
来源：http://www.aibaodan.cn/163ivjnxbab.html

Go:   len(arr)
来源：http://www.sxryk.cn/163oavvackr.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aotetttb.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gwenbbfv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gsjnslwq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163avcaofpd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mzwqahca.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ohksmolj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dtylteoo.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tahvfnkx.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163dbkbmick.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ztoxlxkf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bqxxnank.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xszdiosl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163audsmcml.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mdeufsbu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zxfxmjhi.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163uselzpwc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hyqdrjub.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163qoxnaowj.html


<!-- 参考信息 -->