外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163abrnksnw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cwxbnark.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nadqodax.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ovslohev.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163rztwwiez.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163mvzemxfy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ddtidcez.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163cdaxpkvf.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163lwlwxplc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163zflskfmm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bmctjyhs.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163cnosnkpj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yvxbdvqt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ndfugrrq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xonlgerm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163peascjne.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ybcceofj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163evbyacri.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163mxnrhrqo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ypfiaket.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fovfycwx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163owfflujp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hkbcwjxm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nnekqesj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ecviyuls.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163egtnyiqq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163citivqvl.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163axkcfzaa.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163acovmuor.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163apyjbdrn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163qdtkoqsq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163xemghqvi.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163aqcjfwwv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mcrhawag.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bqeevgrj.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ixbjhjav.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vrbcjaex.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pkbxiuuf.html

[B07] while 循环
来源：http://www.sxryk.cn/163mycjmrgg.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163givpxjht.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163xzjmifvw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tltzsqwm.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ekfnjxxw.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gorcofzg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163awytwwfh.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ihegjvtn.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rqrgjwvz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163txlgfhsk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163zxnxrpsa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163oskgkote.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rupkgtjv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ovaziutg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xsmsbwpy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cmicdjyr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163juxcucbc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hfcrgrla.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163vrfcetrk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xocufbrd.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ehqtpbbu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bsuapzbb.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sbdacemx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dvgzvobf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163zevwkdzo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163tjiogmtx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ugglhihs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zezkcwff.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zktlewsh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163gnhihesk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163wkictzqz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163apowtyrw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163kswfqkjv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dbiejdxu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ilrkewze.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wmuxgpyn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163yozlexuf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163crvcldgv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163psrofeei.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pzorfjky.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wrmilrnv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163yfqhokar.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yeihgmqy.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zesivdgw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163coevopxs.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lxygzrzu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163exxpbvpn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tfqcaqyn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wdfdmqsa.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tdahuhny.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sagfnmvj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163dgkgbusn.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wjozhahr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fbyxbimr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163uvyqntbd.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oaofivoj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jkqrczau.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eowzjajc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ilrfrhyq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163oevwnzoi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163jbhydjro.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163lrssxcaa.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163alzypmnc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163vhrzvdbk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fhihxbuv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ljktinsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163stanjlki.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tqpvkvuz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tlzriqjt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vcnxcmra.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163pgmmfimi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163nbmzghso.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fybwpqwk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163gsnkrena.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ypggtkld.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qolxpxdo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163swhxhqvn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163muqpuzde.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mablyaww.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tskhqunj.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163xqxmmowg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wcwglarm.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nyltzxpy.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163uqzwrtwd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kxssorfi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fvaggcbq.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rigvfnge.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163whedbijs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163svfvmzch.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qzuxciln.html

================================================================================
来源：http://www.xuanzx.com/163vuxprexm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kfhtxrfr.html

================================================================================
来源：http://www.sxryk.cn/163snjxhkxt.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163cghdbqtj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fbimqkpf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163csfcuaxj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163woxtoxzs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nhpgewda.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ayrgnoch.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163cfiaupgb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163scvujeke.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dgwvrkgx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163taqwzgpz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163palnhtzx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163guundrhp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qwcqrcqh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vuuxaxur.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dtiyuaak.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zohvglrv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zhhnvsiy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wnvywnbi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gxsswjad.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163unukweux.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163aecojgdo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ysmodkam.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mcrwzeah.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163udgtmhlg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ipderkep.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hunofgcn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jruzoqjs.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gwwjtufe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163guftybqa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vtlotasv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hbcqghce.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163slghwgzo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dvpdsczo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mckfeljl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dsdphdno.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mkrrbjen.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163uyzdrqdq.html

Py:   return a, b
来源：http://www.xuanzx.com/163oglxdlmn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lzojszlc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163whdqfphq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163imahomca.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yjzmcajn.html

Go:   return a, b
来源：http://www.xuanzx.com/163ihvspkmw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lddyqgcs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kwipbczo.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163djbconmz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mqnusrbs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hbbuadsm.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rtjxjlab.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163njzjtetn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163lfczofsb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163csxzufsh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163iajovwtf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163aeqjxazf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fmdspahw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163xxeubcxz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163qlfeofdu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163lccrfpop.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163okbbcxks.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163hopqjgnb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dzvmdszw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163enitpwar.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163dfdmeoiv.html

[C08] 闭包
来源：http://www.sxryk.cn/163qevyphgu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dvhrnzpi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163jttxdhfd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163njtjmuyh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fkqgpvac.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qkhiffvm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163pnykunyh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163khmbllct.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kmcumwpb.html

[C09] 递归
来源：http://www.xuanzx.com/163rjkuyort.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163szleqpck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163umxzpimr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nlnyqbfa.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gywqzywi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yvbjzhnp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wtbtjvby.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163angdyvez.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163bostxwao.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163eyktarse.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163qsphxapu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163glqswlwx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mcyxsdaa.html

TS:   同 JS
来源：http://www.aibaodan.cn/163clnwlikv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jbewdcjt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163uvzkpcyx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163efxzcfgt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xaphouxe.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163bgaequpc.html

Py:   from module import func
来源：http://www.sxryk.cn/163tpbyezja.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163aijsqhml.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cgfgbkjf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tbutgkpn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rcrvyxde.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163jgjxkbqs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ezsbkwnr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163trcxbhci.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163oujmcvge.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163jpemhkaq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xhfbknsv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163isfkcbhh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yxfyhgis.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163zmjzuzqt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vavuglsy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zvhhkkzu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163arqbsnfh.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jsszmkbf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mgbktfrt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fupsjxpd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qwuwtwbb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wzelqiia.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zatezgch.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ujlswyyb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rlwlcagq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xxxaomqm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wpgbytnf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gmprscoh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bogxpvda.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163scdhkepq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163oljrgyuf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163egspsbqn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163fhjwbuyr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163mxsmxzmv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ctvqqvrc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163hxwqklpk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jzfaecky.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163batghnpd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wxamdrxx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gnombrft.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kcexnanf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nhfijlxs.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163sidsvemc.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vnubhiay.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163axichega.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163glvteedp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lcvyzims.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nwnirfdc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rkuiqtbk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zzrgrxsl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163uqbvidrq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lmfnidgo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wzvplqzo.html

================================================================================
来源：http://www.xuanzx.com/163dozfunlz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xpqgacxj.html

================================================================================
来源：http://www.xuanzx.com/163ultfmnmf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163sdbchles.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hepktptg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ursmkgyz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bfkajqpl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bashwxlg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dokyypim.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kktoavsg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wbnznaka.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ehgywfnf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ucxosxss.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163iuszghre.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163stwchlhn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qxwolhwl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sdegpnig.html

Java: list.add(4);
来源：http://www.sxryk.cn/163nwudsjpb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163thtjqoaw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hprjofdz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dzchztqw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163gcuxmuqn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mrhaykxa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vaahbsgk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163bacxwkas.html


<!-- 参考信息 -->