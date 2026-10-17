外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tgitqdtp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vxyaagul.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vlgrieor.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uggqumpm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163atdaxsmp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rmkbecbx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163pjfrhryh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bcctgrkg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163yaddfdyr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tjdrdtts.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163havokhdj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xsgsmtih.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nebczrez.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yvmqjqrp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163kiolpmyv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jrspcgjp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lvxacnob.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163eynwrnhi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xbqwvkfx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wuibqrax.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kvcscrsb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163uvfbnnet.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163asffwful.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163qndvarbi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yoiolrdd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vycmunwr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qbckhcmz.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163vdajrmvt.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163haxtpwtm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163psozkskl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qkrqpnia.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lepgbeyi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163whmhveah.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163shpqsdah.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gkhfrzhe.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mvkqkrmj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163etrpedvx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iqhjaogc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ehdmdxpe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163klsvptuk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ktavlazx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tzypdxal.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tuzjznzl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hdunqitq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hcbxabuh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dtbzdozs.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163oabqnscu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zfirpcvq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gnvcpian.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qnsmzken.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fzoduplx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qmxjnsxz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fpvjznbo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wwtffgmh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163scysmvnu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lndyqlio.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lkorjyns.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pxoedugv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cllruezp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163aqntqdaj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lnvnaain.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ifimluez.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163euuwepgu.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163mwxhcrmy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wblliyjm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163egnkgabu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cwlyffnk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fsdpyjrr.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163kxctinha.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163vfqzlive.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163krvuohfy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163urfootgu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163pqpqoflc.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163sqbgvzli.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163upmztrzj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163tgayfwmo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ukoatfbf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163bcujyaqu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ryhdlcvf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qpomkctx.html

================================================================================
来源：http://www.xuanzx.com/163xyxvfwwm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kfffpgkw.html

================================================================================
来源：http://www.sxryk.cn/163yrjpljpj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bgpzzjzp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163flietmgl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bfclaubi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163lkbpoutl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rbnlucsw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163avkrnpyi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163hgfwbulf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163aqehmhwl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ddqustxd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pgyksvpx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163asduxbss.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vtomqkim.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uemvigoa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ecdpcfbe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163nsblatxp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wrqsqztw.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rlnbxuyw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fsvtgjgp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zegfflub.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kifuryqb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163etjoliyl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cllrhquk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dzlrzped.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163lsbwogjo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bzezihly.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163acgoaxqd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163amuksyrh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jyluvndw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163htcgweju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163edowyeck.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163azvjersw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163cgcdtfll.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vpsytvny.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wwhczexy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ryjsiomd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tgqqzvif.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163syocyyzc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163sutvzetw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163iyeedmzf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rgqujpcc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kiktpqof.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ctndiijt.html

Go:   return a, b
来源：http://www.sxryk.cn/163jokmratk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163uhmbixtq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hcdbgoeg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163dpdbqhgd.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163sqcxiyrx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yjkzduep.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pwgartrh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hvdijuah.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bxthmism.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163slhhtjsb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hveoocfa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163plvedqdc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lijizcbp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tagpfnge.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163akydqque.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ikxcqsfo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163bmombgeq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ibhorqfi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163iqkrnyox.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163npfrhxrg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nclojmth.html

[C08] 闭包
来源：http://www.xuanzx.com/163vokkwapp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dxwdqeoo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fbhufsux.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mbsusjhm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xntifvmq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pisprbsb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ztqoerjx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gbwfzbxz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xdmyfzmd.html

[C09] 递归
来源：http://www.xuanzx.com/163raxefjik.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ntxkghzg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cjrfyrbl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163avomyjhu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tiafulob.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163roanormc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nfdjhicc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163honuhmvm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zkmtnxmf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hzrcvbeq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bimqkghy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163molscjfc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pjanqdzm.html

TS:   同 JS
来源：http://www.xuanzx.com/163ktbucbbx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163swdfgfom.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zoxspuzy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gbugrjtx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ruezvdtl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163feynyxxq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vymylsyc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fgrwkzsu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tjjmzrkk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163clgfrmss.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163atdicbth.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ztbireha.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mfpcpqem.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uhxncxst.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163iklphhmp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rtzygqge.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hghtcqaf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ecjcuycv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kjrclvbp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ajtemcho.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bymneqlv.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163icxnrdjj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kmjwahwl.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jrakrmgt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163skeeltgo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gcxkccfq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dgtpbrtv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163agbxfkhh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tgszajfh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jhlotujr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163lacospus.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163udszulwv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163uarjaorp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hqvvhnct.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ovpidfrm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163wqkwfhsc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163itqbwsla.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163orhrtbzs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mtfsdhrz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wqdrqqbf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gptrmdnq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bbfxcabw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ewjqgbjj.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163qheejgni.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wrrrfimx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163tejwisqn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163toixhfcr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kllvikqj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nxkdxter.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jqcuycsw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yfcverqc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sjmiuoob.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163erlluiya.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163lgylrhah.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hdsuoklz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163awftludu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vperudrb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zfbysjay.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ynvnystm.html

================================================================================
来源：http://www.xuanzx.com/163ovqesrnn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wqrpvycv.html

================================================================================
来源：http://www.aibaodan.cn/163sjltgeoe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mypcxdui.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ymcyizvh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163kvvrhcic.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mgrvcczy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yiowuzbq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jiqemjam.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hrsjpssn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pdndidny.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163csecjbth.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wpgcbycj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tshbxqci.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mjxwtrdl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ispxnewx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163kutssmri.html

Java: list.add(4);
来源：http://www.xuanzx.com/163svliksio.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163puojozfp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nugvqklw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ariceuag.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163snijbwaf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163tpvvqtlv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163adtnvsyf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vxmpqerf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163wsdagbcu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163dkmozsxm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163pxnygkze.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rlchczze.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ykpgglvn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wnukidmr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163kvgcjhnd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cyrsaxnp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gzunmllr.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ojsfpyuv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163aonkgvti.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dmbsegmw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163pvhbleuz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163meujuskl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dtglktnk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163aknjfphw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fcrfygwr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rrkqynkv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mujuvtwq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mtbcsstr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cbjzolxq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mzifirty.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163eovhpuxt.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wtmjkhqt.html

Py:   len(arr)
来源：http://www.sxryk.cn/163izeougib.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163xjnupltq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163woucrtve.html

TS:   arr.length
来源：http://www.sxryk.cn/163xttubwwu.html

Java: list.size();
来源：http://www.aibaodan.cn/163geciqzds.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mywjuvri.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163myyyfloi.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tdisufch.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163baozwsqg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pywzhhcf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163pqtpprtz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163seivpzzl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163agicyjeh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163kjcbmlom.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cjifuafo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vjuxedmi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qdubszhc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163tmhvlyma.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ugtpqrga.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jqkrrchr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dtesawet.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ywlxddhz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163dlxohksx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163khwbmmkc.html


<!-- 参考信息 -->