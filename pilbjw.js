外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ishrudvr.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jbplvmmd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uxqxryaz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wuvryhll.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ymzrfvme.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163iniidtxg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hrauzgav.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zuqucjjd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jxbsmmts.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uryjulgt.html

[B07] while 循环
来源：http://www.aibaodan.cn/163vrijowkl.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163hpcerlmv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kieedbfx.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163idowzivc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pxcspvtv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ncplodoi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ovkuceif.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163qiputozi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bgwdvzdl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163gfthbyny.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ssmleqeu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kplshbvx.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ldadmzcy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mipkdviv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wyjhdeij.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ephsykot.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163filpqtzg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wcvoxaxi.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163grmvhjlu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ndtmazlq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qwqzhcjo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cbionujl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lewbkdec.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163twtqwcnw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gjvkbdxh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vuwowaaj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vysgzdox.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163hnubhhjs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163cancgakv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cpfbpbky.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163pdrcufhn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lafkkhcr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163iozajgci.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cichcurz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163uewjxckz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uqnpjdvi.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zmrvsgte.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163damldzys.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163aveeoggk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mikltrab.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vbigenhf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163sgpjalph.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163pyqwkefw.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rqhwsyzh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163etvmezyz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163beyscqmd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zlofoklu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qmezbzed.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cwsopmwk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lvdcmods.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oeemcpot.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fxnxnmll.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nsntepfo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163zczvotni.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tzsegroe.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zgekwjuc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pxsqrhmm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rdvcabfo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tnnjumjf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pmykezoy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163alatctur.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163bwmwxvyl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163aqvmswbf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gzimtnrk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tviaencx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qzsxhbyu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lzhmzjrp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163epcfkskf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tphtildf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ewkimios.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cmswrsac.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163emihzcbp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cqfocpjx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nwdlrufk.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163enbmvygd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gbawmsnp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dsqwewfj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cxhqhqjw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tgpkeahl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163joqquzwu.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163brzoxjmu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163oownqysz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163iaxuoxit.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mpuudtyu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163affnnpzk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cbsvyvqs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163bvtyknph.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zuijtnnq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ueqkuksa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nmdkweat.html

================================================================================
来源：http://www.sxryk.cn/163fhfmovwp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163zdanvpea.html

================================================================================
来源：http://www.xuanzx.com/163jcdwvivr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163arkhdpbb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163rkjjmkhw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hqgybysh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163yxtovbhf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163slmuxjep.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pdzyolwo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ulzmrwcr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xvowecid.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vspcbqph.html

[C02] 默认参数
来源：http://www.xuanzx.com/163oaasquvv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tprpmftv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ubemdekp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uhzxqcue.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163phzgdxya.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163axsorqev.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163seloybei.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kpbcccbc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163dcfticmt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zkohidcc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bqpcinli.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mkyjidsz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zactenml.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ayfckdat.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iqgswrdy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kjaclasg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163csirzvhw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163azbyicsv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mypjcjtz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gzkmuqvr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lbsillni.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jscqzjcz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vvjwwncs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163evucwycv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163iiaymraq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163egcobinj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ryvexivx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163dpvgjehi.html

Py:   return a, b
来源：http://www.sxryk.cn/163xuowbahk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kvunvntg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163aqzdywuv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cnajytiw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gtlskxyr.html

Go:   return a, b
来源：http://www.xuanzx.com/163xftjflby.html

Ruby: return a, b
来源：http://www.sxryk.cn/163tjuldtqr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rtqigjag.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ucngmvrw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dcqnsrdb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163hheilzkf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163woqqohdg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ycmuyqxd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tvnawmbj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dbrzgjxi.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163isdwgcki.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vvqofdsh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mjifcgiv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163souhjfns.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ovmykvhf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jksdkvda.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cicjywep.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ehgxxobw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qjmdlllk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163drquabou.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kqofggnr.html

[C08] 闭包
来源：http://www.sxryk.cn/163bbrysfay.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pzemjgus.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163efoywiyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nfhasxpe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163omslutko.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ujqbjcln.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bdbxzkhx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163eeljgvsv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zdaoszse.html

[C09] 递归
来源：http://www.sxryk.cn/163ctcistpe.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163bcmbvinm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163refettah.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kymkhckp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gjtporah.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xivvbuwv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gsvhvprj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163kleebtkj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ntemwohz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hozvlguo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xnprlxua.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163pmjwhfqm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yezxpmde.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wipjxhgb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mwijdsud.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163tteekspo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lbetjali.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ivqkqfat.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163dylxllnb.html

Py:   from module import func
来源：http://www.xuanzx.com/163oepazhlj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zfxbdjng.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163icyyynyp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163yusxggbt.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rotnaxfc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fxzisrgx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163oxzbcjvk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fdceydgt.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lqaxfwsj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gqzgzlav.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163adddgcqf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mqhtwgsm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163umovgvux.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hpqkisel.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xuepebvj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163oiydslgz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gzikswry.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nvkdiuqh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zbhzfucg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pqczqdbi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163vrueyjtd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ylyhdwsa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mmkevrbh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dhotwjky.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163termwauv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163yyyovjtc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163efdrncda.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163drecgzcu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uwvvpysk.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yhmiqqpn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163oexgwtqf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163nlgvyhxk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tzrrnlhm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163unxrpfqx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rdlntuod.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163feyossac.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zrowtzda.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163eagviarv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hbidvfab.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vpbecezy.html

Java: // 无解构
来源：http://www.sxryk.cn/163xlduvqay.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fbwvequb.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kkyweqdz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ftgvdodr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yowveins.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163bflnvkho.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163txmezmex.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163svmzyxps.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mxtwyzau.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hifgprvh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163lxjraddr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163tttvvmoi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163edemwxus.html

================================================================================
来源：http://www.sxryk.cn/163aduwzdau.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ncxzuadd.html

================================================================================
来源：http://www.xuanzx.com/163ovlqfeqp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163iilxtuyv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163klpmnimz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163sudqmrgt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iqcvpnii.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uitghzyy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uosicqca.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xwklfpaq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ybxcaejd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nquijxvb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mhhdrylv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163epepypyd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163tpshejds.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163seoyfhjx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163edcgchwe.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uskurqcw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163txbrfhwy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tdrwonrv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kmsqxgib.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xmsatpzr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163awevwfaf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ceizgmgb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163osjsvhll.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tpwucwjw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dgblsjcy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gcypuudv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163keumprva.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163echrudpp.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163zddtohdd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163crucklfq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bpwqhrsd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qhxjsilx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163slozvyxq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qtsouxud.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ehnigghj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163lrdkokhz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163szaboguk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zrovshsf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vhvvfotd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163xanvptwt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vzmiumfp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ybfyvzin.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163dlwttrag.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xjnlhveh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163aalynadk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163rziwdesb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ttacjnzu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tmifkvtr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xiioiext.html

JS:   arr.length
来源：http://www.sxryk.cn/163omfiwgep.html

TS:   arr.length
来源：http://www.sxryk.cn/163qwqayydu.html


<!-- 参考信息 -->