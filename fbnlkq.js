外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qqekqvib.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hucdwmgr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163cblotltx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163cyzzhpyv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163drbxyhsh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nhwojmkx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163mlahmdji.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163geryjxne.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163rquuiqjm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dorvsmkn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ywzsdcbo.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jkjvseuh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163shtdhfok.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163imiprvlb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ikceizxr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ladufujd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qxuehchw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163dkkbyzeu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ufuvurtj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163awldhjro.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ngkzeecy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zsotabks.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163qxgokoyx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ibxnnqsr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xvpkgnde.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163dksuxing.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163yodmeldm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xpkribni.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qrpjgrnh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bjjhthwx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163jfetcshn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hnodffrn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163svefpvcc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163mgwfcqwl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ijembyhl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163abaccwcv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163enhhkhfa.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163lxeuggmd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bcrgmnvz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163njcakeac.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163kdjnmfaf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163prhmdsho.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fnxjyzjj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163knqkivuc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ulytlyzp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wumtqtpf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ykfbbokf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163xqlzmvln.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163scquldin.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163aiwxasrl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163krdduomr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fgfidfsu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163aoosgvgs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163trblkzrx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dyrcsiog.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bzvfcpby.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xhxhggga.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nabdzzbc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bcmtrjci.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oiatohdk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vvtxdijt.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tfpiojqd.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pgsvikef.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fhmsllaf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ylfmxwps.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wmgfnaot.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ujgmgskm.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kmtpjdna.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163pqvdyspk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zusnrdqn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jwcvuaej.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kavimwpl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lsnsoqag.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163relugglu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163sumagwus.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ctjntyai.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ukqbkfxg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163clppigfy.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kgpzitiv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lauckddm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163uvfymlip.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ddljlkuy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zerhbbgg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vamropky.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ztwskcfp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163jupubwtf.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ouhitqvo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hewykneg.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163yhhesttz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ewgeymhu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163thwqbpjz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163hkbzsrhg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ovzcjyby.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zsflwlmd.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kbhrdnce.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163blxeryuv.html

================================================================================
来源：http://www.aibaodan.cn/163tsstvzmx.html

C. 函数与作用域
来源：http://www.xuanzx.com/163fsnfqhza.html

================================================================================
来源：http://www.aibaodan.cn/163lzhchdkl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qyxuaexy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163zdqihbjm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rmvvowzx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163lzarrlmf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gjyqxxcm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163icsfgmdm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163sdrwjrwd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xcpccpma.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pafalngj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xsxtdwmd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163jtfkoeyz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qqqavvys.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xixonozf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tydmlewn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nmpjjiti.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ujrdxmzw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xioebhvw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ylzqzlub.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lakweogb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rkqmxvva.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jnpwaqyy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vnyfkadm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163pirlxzii.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pmerkvgf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yueybrgk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xflsuqzy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xzfnmwrp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jkkrludn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bfodgmqw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163umdnwhuj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ggbkqvvl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xngivzef.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hurmbzrl.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163btxsdoul.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bmodpolt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kkizjbps.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vuvzxynw.html

Py:   return a, b
来源：http://www.xuanzx.com/163piqodxcf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163oxoramnj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163dopatpzm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bwohrlla.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mzplbgai.html

Go:   return a, b
来源：http://www.xuanzx.com/163jdzosjzt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qmmhepeh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fxyjvzos.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jwtzpivh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rhanupfx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hrpbhszv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ininrbgi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zjegtsjy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mkoybwau.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kuwhrznl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163iiieptto.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gmcxszmq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mjcjjoxq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163nihaoteu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163qtgrhaho.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bhybcinq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nleysymp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vhvpkmkv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163xwrttvre.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cozcnjca.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qqvgltzo.html

[C08] 闭包
来源：http://www.sxryk.cn/163ysxyufnr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vmadkpkk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163krgzkefi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zlkyxmhl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bhybrefg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gvmhlywx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ejbwftzk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qluqtnnr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ixpuedhe.html

[C09] 递归
来源：http://www.aibaodan.cn/163uiocforl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163oxjumasn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ypafertk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tbfnbrrr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163apsldupv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163heuzpqyq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163onlvhudn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lpotzolk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kgkvhcit.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163bzibqhvc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wxyytxhm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163puwoiptw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hltrczal.html

TS:   同 JS
来源：http://www.sxryk.cn/163dawrohrd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nxbluipb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xxnoxrls.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zfyxdanr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ewssrbkl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163iyejnktw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qwbwcdvm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ladmqobf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fktqabvk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rkmblbwr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rwmlxxxq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qpdyrlca.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rzvgbvvc.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163znuosmir.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rjjvrahd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163lecvvnyp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vcuuqfst.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163apdklume.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dysndgvr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fdrofgbm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gatradcl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wlxamxwn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qugxbeyx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163eefoykfn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eyfviwro.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xbmviscf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163muqajwrl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mkcgtelu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cakihger.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cjasyfbd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163orlevzqj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163okbdwrvz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163nevvnbyt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163nqmbmeea.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xqqobqhf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tkkorndt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163sbdodnxy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163sdllaiiw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163pujndgoj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163agenlkes.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ibqkcnmd.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xtqqpydq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163atlcuers.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bupkiffn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lngfrphg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zkvuuayw.html

Java: // 无解构
来源：http://www.sxryk.cn/163xgurlhjp.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gbggfhhi.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hztayxep.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163eajqoyxo.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163llxsrzrm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wmosgmus.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163pdmcbbdz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163bkdigtqw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163uwmkgpaw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163exyonsku.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kiptmmiw.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163spyyfqcn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bmiynpst.html

================================================================================
来源：http://www.xuanzx.com/163sbunofxe.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zgrbylbg.html

================================================================================
来源：http://www.aibaodan.cn/163miycgivf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xjqzbxpy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163vlljiufk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ezuicdfm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vapstxxs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uvjkhgmz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tdlfwman.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mtmzrnei.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gfbpwotj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tdkbvtpo.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163xpfgntkk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163susecjga.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ftiduatf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163woaydumr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163frjcxena.html

Java: list.add(4);
来源：http://www.xuanzx.com/163moozbhxy.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xtucromg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kdachurz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163amqohprn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163urhjxiyu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ddwucnga.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163rsneykxo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xkfqqmak.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dxshfrgi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163denxwluh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lzrbptim.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qlbwlowi.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kinmlzfw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jxzndekv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tiuhzlkl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nknjrqds.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163omrxvrkj.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163yktjqtmp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gnpvhpzd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iknjrobb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163idnxvzzc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kdyumgfk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163gmvywyvb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qhivgilc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ytvayypd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163anyhotmu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nzjwbpak.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163rwtimvkm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163duvctahn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dokbrwwl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pefyiado.html

[D06] 数组长度
来源：http://www.xuanzx.com/163htadjrls.html

Py:   len(arr)
来源：http://www.sxryk.cn/163nncnhuzu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163illyvlep.html

JS:   arr.length
来源：http://www.xuanzx.com/163yjuafxhs.html

TS:   arr.length
来源：http://www.sxryk.cn/163ymlagpfo.html

Java: list.size();
来源：http://www.xuanzx.com/163uqyqeekf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163rellhxfw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pbueenlv.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hfxndhet.html


<!-- 参考信息 -->