外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163fggbdtnb.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163skgojefh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163nhpexynw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fimpuedn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dqjpshml.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163eajwyblv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163bedjssns.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163nfcyjgnh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163usllmxtc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vprfnstl.html

[B07] while 循环
来源：http://www.sxryk.cn/163jxrqokhg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163acpchdgx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mfzjuash.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kcozsjll.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nxzrlgwd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rcgbmdrw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163wfggswgl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163rbrdujof.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yfxcmrbz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163fdccdokr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gqfilnac.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jdqinxxs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tyckvnto.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rpjwrawh.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rmrhvytu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vycmtcvu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lneeegug.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oeitadeq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163syrgjnfg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xusbpyqi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jdcsgrmu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ttdrejan.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mvfcztzf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jvecjbcs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qcvxqjiv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tfbnykoj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163njxisnve.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jrgpfsbf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rdtfpipg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163deggxfez.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sscxidnb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163wxfucjez.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gcwavjgd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163uauzkohj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163mwkpkqtt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vqudxylb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163alsndmft.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163pmcbzlrq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qssofbsn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mibdolal.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163etnbrscc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nqicuaec.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mllaoahx.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zmvffvix.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vvbxjvkd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qznuxykl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163weycyjld.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163glnrvafv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yqfaqmie.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zxkegxkg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vqgrkchg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163axyolyor.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nfaslzzx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163lchvofmn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163xkwlfzvu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163okghhdhq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qzxconod.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tsruvtrx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wehraqen.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163myhqzosv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163kknirlyj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kobdyhlp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ucdwxswd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qrmofjvr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vnfzttwd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xpcpfgmc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163grpzgwmu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163punanuxw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gcyhowgm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163jfqbxxem.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pwvpwfzv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tjwzrohx.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rpkklzif.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sxqrxbkp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163remqtyjp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jaajvegz.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163eaexrhke.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zoatsqcf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ebclxtjo.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xbpvxhwx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zrnvybjg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jplmdjko.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hhlkfkxk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163guhjhmgz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163toymamwk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cwtycprf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163dgvcuuch.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vwepgdgt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163muhmdeoo.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163obzdjnph.html

================================================================================
来源：http://www.xuanzx.com/163dnvmvxpc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163fzikfhnd.html

================================================================================
来源：http://www.sxryk.cn/163yuepingp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cdydoxog.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ycuimsrc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qsidijzd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wvsagrmo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rnawdnsa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xeuoxlof.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wphgbbph.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vhlqqrks.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163htputsqc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vcxfzbfy.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zwwycboo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163njcrpbzj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zdnnsghh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rguskleo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ecwwngak.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nlbehojq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dfnjodvy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yiauvvto.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nlxyzrbq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gyykyvdn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fnzahbfv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163skkmcgbi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163andztkuq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nroqphoj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kcsxjobq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yaqoqght.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163snnqqskj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hujpvdnn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tcihozob.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nuxcffmk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yeeiriqa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bmecacbo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qcbtaxbz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163scduiyna.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iljpyren.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oktegiif.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zlkddrjt.html

Py:   return a, b
来源：http://www.xuanzx.com/163cafrhyvq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lcotlbll.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163guiuaqik.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nzpuqxde.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ciqtmoxs.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ofajdjoc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fwjwrvbh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163radpbran.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rxomukxz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rdpmcptd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ixhmrwuh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ipmrkhem.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163avoxmsyg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rlfsitsj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163pxmylyvf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qqcdrquf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pjmrptpl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wuqauavz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163yfxcxfyu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163tzpjgbqe.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vnsyteih.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163manizcjp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ipffnmjp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kcfuvziy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ogycggxw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tqfysdpv.html

[C08] 闭包
来源：http://www.xuanzx.com/163neeseine.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163pcynxrpo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163kfcbclfn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yqvbogrs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xvjiofsq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163uuebwdlz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163apytwxbn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163otqgtdeu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tfylkxgg.html

[C09] 递归
来源：http://www.sxryk.cn/163xzclrany.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kqsadkqd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nsdfaetl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rcxtfqsi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fmluuahk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hvucabes.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mrpurpfx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zqhkqxzz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nigjtlol.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lczznllp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zohftsmq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163huwryncv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163azerkuvm.html

TS:   同 JS
来源：http://www.xuanzx.com/163hioxxfyh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163stnbvvnl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yxcvobvu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lirdveuu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ubzbnacx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dnpclsxx.html

Py:   from module import func
来源：http://www.sxryk.cn/163cjgvsxqb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kpewxvuu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163yomwykmz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163phcpnbhb.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163fecsigom.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163wlzlfdjr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163mtrwowdd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vvcglfoa.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fufbrapf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mbqacnwy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rlvihvqk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ogikdsjg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vuludglu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mmdvwkri.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vsxtvtbn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ywqvodbl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zvmbljgu.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163sgnlwmik.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mumnwwnn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gowexbow.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nrrkdabp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mwvcvmyj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mosvycwe.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163shzikqqa.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163yxhqymup.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ufqsyifd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163eyujioyo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qtstkzap.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163axmpwzwk.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bqphukyp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yowmycpm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jyngfwvh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ydqeooaf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163vzyqrtai.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vwynwgwq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wmtyjjas.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163uddvnmsq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163izvviuzo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kdrficrx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fjpmvamw.html

Java: // 无解构
来源：http://www.sxryk.cn/163tvvsvhnp.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mkfgbaqb.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163tbmyjwnv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lesnztdr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hywqkmei.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uxocugde.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pbjmelti.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163agdedput.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xqstjhxk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wzzxgxys.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qabklzpn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163huvmtfai.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bdpgisep.html

================================================================================
来源：http://www.sxryk.cn/163pbcefdxe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mafbjmif.html

================================================================================
来源：http://www.sxryk.cn/163fowqlbwi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163trxnzbxx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163gspzykhh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eiydelle.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163witpuret.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163sdbbeqrs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zxzflajg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lgfcdxmg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ojlnjrxi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163urdbktwd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bpiagkaz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163smvjnwrd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tcxlwbgs.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ualydwwn.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163buabjont.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ggmkohxo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pqaykpcz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cxggouuw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kslqmitu.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163oplegnpz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163tugvmuup.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ihvqdfzk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cckceikr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163mtgpvkrd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163czvrifvc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uspcljvk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gzxeesmc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mqrbnmzu.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nmocmixa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fmsqrmoz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bpocagne.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163qszwsmhn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vmpegsab.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163kcwpshse.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163flcneumj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rrhxxhcu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163teplxkao.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xblsmibc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mhzvdqmf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163orwpllzr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163tjvnjuwo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163alqzbhua.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xamarkoz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nqmqftks.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163szgamwuo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bqxzmaql.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bsttsggj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pixpmupj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163qqejiogi.html

JS:   arr.length
来源：http://www.sxryk.cn/163nwzjwhht.html

TS:   arr.length
来源：http://www.sxryk.cn/163zzvmbrpt.html


<!-- 参考信息 -->