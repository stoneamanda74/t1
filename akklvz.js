外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cpzgysmu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ufmsemag.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163erxmjpqj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163dnrlnipx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163nwvnerbr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163uuozxxgd.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163crqtngvi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jlzmdfys.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163iolysclg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lkjmssbl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ahwwpsno.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163puwyhrdr.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163yekujyki.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ddwqjniu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ocawcqyc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dkrbinag.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nxfazhep.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ugcqchpg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163mhhoxhnk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163quznllbf.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163pccxrnxc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jvfzwhec.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ksxqagvm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163srhpzyhk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nlviqzhv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163omtjxrci.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pjbnvkrp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163trdsmxbq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163azcwqaab.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163scnxrqil.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163frgbwrvz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163edasmtpo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jdxwegqj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qtqrangm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lzuijwvf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163majugdba.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ubjywjyz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dbmxmgpm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163iaypkhka.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163lijwzwgd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163zgykkqxk.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wgtfjomc.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zfclctfo.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qyuakwrc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ruefcvju.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fpnbcich.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163onpxijng.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163yyxatrpw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163lvkuzohi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163eduzfroi.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jpzochvh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nzhhbsps.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kkxmqrpt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163logdnaor.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163txqyzmct.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dbdneofy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qhvgwpeg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ffjqkqlo.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163jxuithbs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aklnsers.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jznmhemi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ylpbzayd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qpiyafdn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163scliuzfx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xmvvsagh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163okslosbg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oopihanc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163czqoqqff.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163fybqrnuz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163xvvpebdx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bnoubsvp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163tcuzvehf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163wohonwqv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163loxwmxsr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163etdepygu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163vnuywexk.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163tasstfmc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163eumsorpi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sozytbua.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163srubpzsm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163gyyhkfsn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kvtiqgah.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163obqzairr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163keuhorub.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163akykinsb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jgrntqph.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kmcqlwhy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yvuvttpt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pdktiqmf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vhvosuvv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hfdvuwmh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ehxtwmjr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qwolnank.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vmbarsah.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163egwkfvto.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hklpdppn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bevsslxg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163blatbuvt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bfscdmsc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tcfworys.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hhslojoc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163clsapvkq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163quwgwswp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163lcpuajal.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yvfddyuy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gthpvpff.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yykhpiiv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tvnymxgj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163oguiezyv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zdqhftyv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163eldmnmzn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yzcagtry.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dkqsmliz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nevvfpfs.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wwykdilt.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163oaimgcdg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163sbrmypme.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163njgdhbje.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hkrihcud.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163froscxhk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xxxeilqp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wjjmtoxz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163wowrszeu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163fmuazzge.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dpaylhng.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163oldifanf.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ycyietxu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163qzttehrr.html

================================================================================
来源：http://www.xuanzx.com/163gabrnuku.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wfpgzvqh.html

================================================================================
来源：http://www.sxryk.cn/163wkvorpej.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yszyqdxq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xjeculnf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163oanbcnrn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xxiyftco.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dmylupbs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163luasxmqk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bpnikdzc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xliknqri.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rexqbhka.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vsuaoyrq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wsyfqwfy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163tnxoanco.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163evkyngec.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wiwrehxa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zpfdgxlw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zcqkgtrg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ymeaybzb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163vorspnof.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xexduvgu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wkdycekv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163mcwnvbyv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hudfaxrs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gpwxmnbp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163djtpuegc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fbsdkpml.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vljljxxg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dgwoccdr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jiqmltrx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vidkfhjt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163msuzjrxp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163giqwgspm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163sodlolfa.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qawlhjeu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yplsfaly.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163stvcjgrm.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163onvvdxoo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tnmbhiks.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dnqzdvte.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qrvhsavg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163edqihlgq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163eecclsur.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163hohgrefw.html

Go:   return a, b
来源：http://www.sxryk.cn/163hshzjere.html

Ruby: return a, b
来源：http://www.sxryk.cn/163tfeomwzb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vrlqlgbi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163uwbjtscp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163syijxyes.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163icyifrgt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163burkpjne.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163djwgjdwd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yghfpexi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zmdveqje.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163eenonmgz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uhnyziqh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qogionca.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zqixprau.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cfygvdtz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wwysarlx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nesnbool.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163brvwvsrv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nklbpfrg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ielmywuk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qgzugtnn.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wxjovjjg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163nxvopxjf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163zhenuzby.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lqqcoyvo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bkbidjnn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tmapulbe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163fovdpzln.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tlkwvkad.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163crbjmgku.html

[C09] 递归
来源：http://www.xuanzx.com/163qqdnvqjv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163wjoxlonx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163dhrrhfew.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163izincmwd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ztpazjlk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163csgsbzye.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nkafzcze.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bdkbczqk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qdhjibbk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cfcmklti.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pwaqfhyt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163eqywtnfc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nrqxkonv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dbotskze.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xprwekrl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ptpygzoj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nsgpcomx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bgdjgnqz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gmeyminx.html

Py:   from module import func
来源：http://www.sxryk.cn/163twindkig.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163leahjtns.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qaiyyhdu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163sbdgfgrh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163sputsfnu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ozvjfxkm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rgfpjwci.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163idrkyiss.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163joxqeymz.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fdixtwab.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ojyiocqm.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lvakjlat.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ljfrqojs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ptevnlrr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mygdhjos.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163sfqrlfbs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163twanvmze.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wigeyraz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dxxrmgwo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ucbsrtxy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tjzpxyge.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163glgjvdmr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oljpkbtr.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ekwrkimv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dzpkabif.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tnwjztdt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jlzobpxv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vmzgkyfl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163njjkljoq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163edgtyegq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mxgwllrn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zaxxckjm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ottyfvnc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kilpglho.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wsdwjicf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163anjbgxex.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fukpuqad.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gsnavddr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163chvspzbc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yjxwanng.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hihaswyi.html

Go:   // 无解构
来源：http://www.sxryk.cn/163niykmjtt.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kdofqcdj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cklrqxqg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qojqadwg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163twwaemss.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ozkeyryt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ricyaxie.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bxwwmiad.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163dtagidhz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dzqrpcmn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163gtuojcwd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163npghoncs.html

================================================================================
来源：http://www.xuanzx.com/163pcrmtffs.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wjgtufsy.html

================================================================================
来源：http://www.sxryk.cn/163afuqosqq.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hfpczfae.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mxpermpl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qqmyrklw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163sbthgfch.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bcocbfcb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hxmkeklu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163oorzinsk.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lzxczmdk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zyktuipx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ckswmcpe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163byznfxmm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163isdxeehm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163acrmcfut.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163pggyemix.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qcucjlyf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163usfejqna.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nfpihkym.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163aqtoadps.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163zetymljk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lxtqqiuz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gyqipsfj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163snaidpbe.html


<!-- 参考信息 -->