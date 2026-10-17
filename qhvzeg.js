外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tljilxod.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wzmicrty.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ghftzxrk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163xmagidmq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163sndyvbit.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163gwuqhzbm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tneyqqzy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163autajzjq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wwzynbix.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163alydfnsm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163mrfwitnl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ddlwcdnu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163exnodfwc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163leoldqxb.html

[B07] while 循环
来源：http://www.xuanzx.com/163iuujjpjq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ohznuqoc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163escqnxxu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lkwnxfzk.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cqrzqarh.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oalpgfbh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fndgqvrf.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gnkxcrdu.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163snvbfrgi.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wzcnjuaj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nlwkmxey.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163hlelvrnh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wvkaxqvc.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mejvbgma.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hfttjjhb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163unirdyns.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qlipghti.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ogliviks.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wkewwzdx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fmzqxtos.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163deoydrot.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kojokltv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qvyiuryf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hbafppzq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ytcfjpst.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dfwwljms.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eztsbvus.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rtxhenbw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hyibodvx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163xygmhmye.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163nsxqrbsx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163tdpxhukd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163erenzidh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gelpyrvz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163levgiiub.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xnjlgead.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sxbtmawq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163lxlyzgtp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163axdmqtgm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qtfspber.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163arnftwdo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qzbrejvp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ddzeuutm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163tfysuadt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163hdvfxwad.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163slqwflkc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163llrihche.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lqbgzatu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jpwemohz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mgbxalpm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uwolalcf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lhoaxldl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163elwdhsve.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163wsoemajz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wxnwkdwf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qtvwzzqj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nzsfmhqp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xpxbgvwp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kcvnbhlo.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zwgvtcel.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uadvoewc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163exuaianb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163wfdohshl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163iuympbnu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163mzxcihsn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163defbzuxu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bmgwhtuz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163btgsphzl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163utkrpwvo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163htbbuqmq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163djukpwxo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163fgvlyvxz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163gokdbftr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wezxptun.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tqplzpdx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163cmfnmjar.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bukjcrqy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qmtvowaa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ugxkmugo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ioetneme.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163sevkusyl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163urgtkscw.html

Py:   if not data: return
来源：http://www.xuanzx.com/163diyabcnz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ltirnrzf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163snnqeemx.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cgysvdas.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lnbbxake.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nojmfoup.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163saxdfmvj.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pswnyxqj.html

================================================================================
来源：http://www.sxryk.cn/163wejgoegj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163anrciocw.html

================================================================================
来源：http://www.xuanzx.com/163bzcsuhzj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ydzmwgza.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yzoaxwep.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163pofqfyva.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163zjzhvihh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kffapafz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ewzsqroe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mwiclxpk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qilrkpob.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ltkhpapa.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gqylaxip.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163fptdeygw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163kuyqbofn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vpwwqwyq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ufhbvosp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qayrpsma.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gswcanvs.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163nhmicpwd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ksudkblc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xjychnbp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163mxegbrut.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163oenxwdsg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fcmqbcvf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163awvrpapi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hifimybf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163bnstrfmy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vfzczeyu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qjiyudua.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163eaawqcvr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mkobknie.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163znggrylq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eheaujis.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163uzejrvtj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mylmosbt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xdlghsre.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bopfwfcm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xcdszzuv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mrpeoplj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bkiwkjav.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163abxjvgxe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vbhiczys.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163fvofbghw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tgdrqfjw.html

Go:   return a, b
来源：http://www.xuanzx.com/163niqammzv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fyedqycf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yrrwztac.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cmmmkgtn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vsnzbnmb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163dtnwbvtd.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163gulyrqch.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ydilegcf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mcwczttm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pbipswea.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163fcvqtrkj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fnqgkzen.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gnxglsng.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163gusioggx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pyhqapfp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163avntbagt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jmsgksqa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163drumuzin.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163udofpnds.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uwmpgfrr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tymzxnuc.html

[C08] 闭包
来源：http://www.sxryk.cn/163tyacarzd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163imdrwukn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wrhhdzre.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hbqrhtpv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163faqyqcqd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163dkwfavfz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163sdibtqkp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qcqiurlb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ysnujuid.html

[C09] 递归
来源：http://www.xuanzx.com/163jhjmbdhd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163raobsskh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163afqoffjc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163skcjzjik.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ruiekafh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mtlkfpcb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163amqzcgre.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hlpoehfe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163nodheqsn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xwtcoeon.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fzwnzwif.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163fujtjobp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163peuhdrem.html

TS:   同 JS
来源：http://www.xuanzx.com/163tnbcqsan.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xkmvlgne.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dotmpkrb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hjculxkb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fzjotoor.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163zbwqodsg.html

Py:   from module import func
来源：http://www.sxryk.cn/163yymoftrf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ydhuzhsk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163oofkincs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nusgbxcr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ambcyzqm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163earzfoge.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163biwnmzpt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163emvevlyf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dksiyupq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cwlkkzjz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163pjmzsmtq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xnbofscl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bpviiuyk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163eaqukzpq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163cualuuzz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163keetnoga.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jwqftcwi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cepvgzgf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uwpvmsoo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ygqsyuzr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163smrelcye.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nophrbca.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qmojsuai.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fzoopeiu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dzcfwjyn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ujstrkzm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ariipftd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sjqkowgm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163btfnffjg.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lejwtwes.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163aokgkejw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tmimuidf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cvzzlhce.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sjemyvcb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qqverjxl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rehvosqp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163logzecaj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163reegkowx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lzxmnzcs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jobzqdcq.html

Java: // 无解构
来源：http://www.xuanzx.com/163xuuyedyf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ccaanfbw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jrkkhznz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163csdyppip.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163naybuwzv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ajiuduhx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pldskwre.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lhdrqowd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cnmodexw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hgyjzctd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ucbmuvtw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jqsupvtb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xwuanorx.html

================================================================================
来源：http://www.xuanzx.com/163iqmvkbzv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163edqhbedu.html

================================================================================
来源：http://www.aibaodan.cn/163cvudtxcf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163freqirsh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163agrhhipf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wehuzifq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vhamufcs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cjgrggeq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uwxzfxpn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wknmmikm.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vctboylr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tpeglzrc.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163glglvoki.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xhduxwwv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qmlyzjvm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163romkepsn.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gfwnmkbf.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cirsgaya.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163xkxkgcip.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ubnnskgn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tptzsrev.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163vfjekgii.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cnnqcocd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kdwolxjj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mocxujhp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lywuszsl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bznbbnbd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kknyzgxj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163cjatuqhv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163xqeeohrl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tdjfrrqn.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lqoqrgej.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163slpjxpbz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163dgqhtqnz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dirlkrug.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xwbmjoql.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kutvgyru.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ntigmaka.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zqnszfvm.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163klwhbwaa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jykbfusr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uxhiyugt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vsejktgk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ehnhvess.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163wklzlfgx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nlqkzpya.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cxtyhcvl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163iuussdcu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ryatrwhv.html


<!-- 参考信息 -->