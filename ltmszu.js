外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163huxsslwy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163reojrrze.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163dxhjvxgp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163grrhvsbq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qjpjyxde.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163smbgvqmi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ubawoutd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163vtvtuphk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163afskhbhh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163rircophv.html

[B07] while 循环
来源：http://www.sxryk.cn/163zckwyyqb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qisbbvid.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163skkztzdu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tktturlf.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163elrtndsk.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wdepqepk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163lagygupl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fytgvcau.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163thmgoksp.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ljupluza.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rcvczjzz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163jbiefabe.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mljtxosr.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zhkpcfsz.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kbmnzkru.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163kkkcdolh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jcvuqraw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zkrwfmek.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jyefyrma.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cewwtrxd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163humvtciw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eyydydqe.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zzqehnqb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cjdfhtrh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mwyxbutd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xztjcphe.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163skrzlyxg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163maifdluh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qacvywaq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ialzuloc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gmgjlhnz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163npscvzwf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163aureltow.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163cgqdcorc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rlhtvcrs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163zszvjfwo.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zynfewuu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163adeolakz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hdikzked.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rgllubds.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uzzbcyuw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wwtfbodc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163npmpyrqa.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163hgetpkot.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lzujfvoi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163urornfjo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163noorcrmg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wgduhkga.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aizdwetf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163afpfcvzi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163joocnrbb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jovytvft.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163huogpobl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pycbljlw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rqcaoelx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qrbdojpf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163utrditvf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vjggivit.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pgmhenyf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163obmmkkvp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xokoxpac.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nqieiini.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eleasxuu.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163kzdzelpn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163lucmpamt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rxwwvzpr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aobwufuj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hgvsjhau.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163dkcciqcn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ohjctcfy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pmlysjko.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163djmqyhny.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163imombwsc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jbwzzvan.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dcjsgquh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dhhnxubb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163csjogjad.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tqkbqanx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163zdgrouiu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ybojwdrr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163otpzqqsm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bwohlpjm.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wfawdyga.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mqzszfue.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ezqoyocf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fyqccdfd.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ecmwesat.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rjccqkld.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163daviyrcm.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163rtyftpnm.html

================================================================================
来源：http://www.sxryk.cn/163orhzggaw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163nnthlyra.html

================================================================================
来源：http://www.aibaodan.cn/163ekycwxfo.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163csvtsuhw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aukxfbax.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jhgexdeh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dzsdtxro.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163orgbzwru.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fxhabkjc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vyqozmep.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aetaiypx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xwmxedej.html

[C02] 默认参数
来源：http://www.sxryk.cn/163dcbttrmy.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ylqdhkuq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dwtegymh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wqqffakp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163medtywop.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ooqqthah.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ueffilcf.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pakbicok.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163utquxkil.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rgzdwarf.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163elnlxcjj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bmoitvlk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hbjszphy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lfbqxkrx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dyftwsmw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163tczzcqnv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zruxifgi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wfmzjbcm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sbqbjvqb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ynbijxuh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dsjwhtvc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mnxojwon.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163iuqzdnuy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kasekqrw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vyhqkxwl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qmmcuney.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bbwkvjvu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163syodzbvl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ibreutci.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163blickezl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gbpiheft.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xybsbxsi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ghrgnmmk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163yrbnabht.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ihxkgkiv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mwwiuzke.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xmmzfeed.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tybowhnf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uxzapezs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163gwrraces.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163txpbsful.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163esvkijyl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ysabogmz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163wmisoeog.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tsbtediz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ielxqlqa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jnwvsfhh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xxopjkyb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163poiglwjy.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hxpdfsgg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xpakoniv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cewbdkzs.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fcumclis.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163hvpkxkwu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fwzqwstl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vqtwyqxn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163azubkqfa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163olbjlwal.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163prkgmilx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163hysphgnr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vwtvpyyw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vhkjspuv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163aabnovqv.html

[C09] 递归
来源：http://www.sxryk.cn/163pqpucbnj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hoshwxiu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163iqzuvwka.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hkiiliuu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gktcredq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hgjgxxqx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pipddhmj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wlelxlzt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gmmbiucw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163etyzwlcn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xdpgwwlb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kcmmhgkf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lorybwvx.html

TS:   同 JS
来源：http://www.xuanzx.com/163uaqzirti.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mtnaigle.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pvkxlhkk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fffshjyx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qohbpgho.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gcxiofgj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gpagdngx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zfbjabyq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pgyzpuht.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163stlthpjm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163skeutgzs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cvlqrnwu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xvqpmxlo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kgzdpqaj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163rzwmmpam.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xtafrehx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mgqysfzc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163shegmdkr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jprbtkxv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ntindtjw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ipbtxquf.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163viaheqsp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ohjjvaqw.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163djnjxrlx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163scbogegd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mcldhuhd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jboaqqts.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sealkeow.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163icatysml.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bznizaxp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163admvakxb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163iyvzwmzg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ekpetero.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xedwxmhl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163szawrlti.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cnsyxmmq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163knnchkxq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163waeitpwo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163asignlia.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wdhwaxmj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ssvpuitw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dzhhvgbv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xssqzadz.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163cwiegfrj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163megopiqx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xfwvoayh.html

Java: // 无解构
来源：http://www.sxryk.cn/163qmkhuata.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bwnsrdjq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kvfmvjyv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163eqafjevk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vtrouydx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cntjjcpl.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cmzqljlo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163aczxbuep.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yehpxavn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nvhlcsac.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163bgkxibnx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163htjqtafc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yrqikvbu.html

================================================================================
来源：http://www.sxryk.cn/163ciowicnt.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163sfswygmg.html

================================================================================
来源：http://www.xuanzx.com/163eggppsgu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ivqocjsp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163unxytozo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gcwpdrsi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bedmoyav.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oukkolkq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xodqmnur.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wpknezkh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vmgzgstb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fmzsxfwe.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163amjteycu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163llikdfen.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163psfjnfkw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163nqxorrnv.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ywevjyha.html

Java: list.add(4);
来源：http://www.xuanzx.com/163speqtixn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tskldpth.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163sdsogars.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wbfimgqf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lkqyioxs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jmuyuoln.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xxxjwlpz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163upesqsju.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163uzidmfse.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163itmrpycz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bynifyyo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nbcjcooj.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nltfyiqd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mmexyxvy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163agbxyurx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kyadkbze.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wyaqnhwu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163chkqbrgc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nsaviyzn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163dvwdiohf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163soywhhyx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ryobjsyn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vmkxwgaw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kilitoxh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wwkeokrq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163uwvuhykb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xndaqjcz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163riwxklsp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163imbqhtds.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fupmmicx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jvrxucza.html

[D06] 数组长度
来源：http://www.sxryk.cn/163stuihddl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163fzkasymk.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163vadpcvud.html

JS:   arr.length
来源：http://www.xuanzx.com/163ylzcaelx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fjusymza.html


<!-- 参考信息 -->