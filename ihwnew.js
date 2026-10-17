外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jacuejaf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yoonszxn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163unopsaoa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ttoexrgv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dddfmptv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163qoswdosp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nolkzzzn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zqbvkzpr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ywceiczt.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eqpmfhzg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163muunukec.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vtvquaej.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tjmiwdjv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yjdcgaas.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ewwrtvib.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yyxxnvhb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ogaebuix.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nqkgwxuf.html

[B07] while 循环
来源：http://www.sxryk.cn/163liuoadqv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kmrpumpr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163kdqiimlb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ymkzjlyo.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gqxnhiya.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wdaudluq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163sdpqdgfw.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ovggpiay.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ycgcsfqo.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163oljsbnjp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mudgcnzz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ezcsszhi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lpeljkpf.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ulokonjk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qcdvqmsr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bgnaqltf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163phncogjl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gyiknmks.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163tomzniin.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163enezmurh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163thmprfcf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vwrwlkqa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fiytoiah.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163klrrudrt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yjnzvrps.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163senxynot.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163skajbtqy.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jgsultys.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kxycctom.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163nxoldttz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ckllodsp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pgbqxohg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163cgwivwof.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dpsruzof.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jjxbofwz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tntwdugc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163cavmklic.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163xapalnmk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nrytqdaj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ffnponyk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163uqmzeuwn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163sxqdahyy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163voipvzjd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gulrojle.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163vqloznhd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vljcvbzk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dbexztyy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163eykdkfrw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163iahokvav.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qhvcundz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lvuvfmlg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bwxwdwjj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mthzhukp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163laovxbec.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163raoccvvk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163hwlrowpe.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tqmfocua.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vccncjkk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163gqyhpxee.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163wysatrqe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163isiinjyl.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163coqzxywu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vrjywntw.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fcccmrtr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qhygpccq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163liugrjfm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wfeefnpp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xtmuyoqo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zpynczmt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cjisblss.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gfsyosgy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wioamwmw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ikclbvog.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cbfhjxib.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ifxporkm.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xletigeu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163bbhopims.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fylycwyo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lnuxtkrz.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vpdavrcq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163etzeavdo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163dqozvwig.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xljtugyu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fyzxgoim.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163exfderzj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iycgteja.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iihoakus.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nrqawehg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163smogovtt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163hnelgzkh.html

================================================================================
来源：http://www.sxryk.cn/163ldwsoyam.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fwdtwadv.html

================================================================================
来源：http://www.sxryk.cn/163nucquvro.html

[C01] 定义函数
来源：http://www.sxryk.cn/163orzqjcda.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uvrjiuub.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ivhohdtf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163iabrinvo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163szcncjkm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nasnptki.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nglblenk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163oaqpweid.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rwmfqsmo.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cfaxlssy.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163awqjqbew.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wcdcjqqp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xpazipxs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tvuwhhnd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kvwyhsim.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bllwsblz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ynipeuhd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bukmexuj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gaevtdrr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ofdkhzcb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yjtimscl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163eaqahzte.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163daekivce.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bcwadnpl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163olzimkua.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163muejjosr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bmowwxns.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xkuerxpu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ngbibixg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nvfhdrlb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163naccofvp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163khjophvg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mpturawt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yymzsdqh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vnxvttzb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aogtsmcl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zxqymshg.html

Py:   return a, b
来源：http://www.xuanzx.com/163hdtndtjn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nztqtdid.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kbjwnzui.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163joaaupda.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163zeiifqjw.html

Go:   return a, b
来源：http://www.sxryk.cn/163msunszom.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aouvxros.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hzklghfh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ezdqylls.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tvxkuunv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163flhomgnq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cawjehdn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vmlycikr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163tvgurilj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dfyxrdte.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xhxvblec.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163budfllmj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kgfvaowo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163szjzdjkm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ytipfpxd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163znbjqaqa.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jhhztgau.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hcvghoqo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xczxqvgm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rcnwnyuk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kvnbmqly.html

[C08] 闭包
来源：http://www.xuanzx.com/163aimksuqf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dehqetcb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ptgoegle.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xtjcgpbj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hunmqjjv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kdelfbwd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qfnvpgze.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qeglbzte.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163unocrhnx.html

[C09] 递归
来源：http://www.aibaodan.cn/163ttdtgyit.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163eaiplpci.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lvhbaqzt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163indlgfep.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kyomlien.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163tonzrkkd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nhfzvgql.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fdssfhlw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163saxefzgu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uljvyfed.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gwfaogku.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yqwzotzu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qikeocpz.html

TS:   同 JS
来源：http://www.xuanzx.com/163mccvuhnz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pyddrmkt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163wjhppiqp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tqdusvty.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gsvbcqry.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lnjsxgsy.html

Py:   from module import func
来源：http://www.xuanzx.com/163xrabsgpy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yywtsuwc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163peviknmn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163uyzkeqgi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163asbwxjhp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vpypbxni.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tgmlragl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gwapblzp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dvxrfonx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ngpolmtk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xnfwahhk.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ytrpzwtq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kcbfmfyl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sajqsndx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rdwayhdc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163lpegvszl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163kysfhhdb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jzvezpjz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pwoonisy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bkdgifso.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hqsesimd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yoshykec.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wihznbcr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jmbvzwlp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163klrjzruy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163oodmzusl.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jrgytizn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163voplpoeg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yjlfdrbp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kcctkjto.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ylgologd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163otgnpfpl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163esxwebcg.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163agooiwne.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lqvbsnuf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163wjxabpts.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vbpbhlcq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kgzvbysp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rgucbifh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163orxlordv.html

Java: // 无解构
来源：http://www.xuanzx.com/163zqzxnfwc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hfhvchag.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kynelhbq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zekdbhzh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vaqfkmka.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xatuqkcg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163acewcpca.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163bawmphnb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bfzobymu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lipmwwbe.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ztpjuvic.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163isyvzuma.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hieizzda.html

================================================================================
来源：http://www.sxryk.cn/163gaemarvw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ykbcwzxo.html

================================================================================
来源：http://www.sxryk.cn/163umwckmlu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hjitkrnj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lbcsushz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dwgnpceu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jalpevqp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163aabusqqa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ejoajead.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mafrietr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wqjumcbr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163psdxmxfc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bwzertkf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ngxlehtj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bsbvqjll.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163cxglssss.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163zhnazvkz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163pazepcye.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ntmvolbm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163lnbrvmos.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163wqnzgfny.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163iqvdiday.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163czvqedjf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fubmiesj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rfywilco.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163iudtvgzk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xpwmrnnj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163djfctyyb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163rudzhofo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jloaqrlv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fwpcgaaj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qezfsvue.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163oabowekw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163slodcskv.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tphrrxun.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fzdveqyv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163trsrvmak.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163kfgblzjv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hpwjbrdu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rpyxmzcx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163aidaiajt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163odkmcdxh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163sqjopioc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ekdrielk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qxejhlje.html


<!-- 参考信息 -->