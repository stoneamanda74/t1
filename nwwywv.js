外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ykhkijuh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hpzsczxq.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163csdenlsa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bcemryrh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163sqxikosx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163znwiihlq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163lrjlucfk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163votcpjyp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vkqjkrkw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163zrpcgmky.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163fnhyncdz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163rdjifthd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vahuanag.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ppgkrrox.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xungfqcl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tuftcnso.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hcphrkvh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ybvayazp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zcttmmcr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163orxuozfv.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mqjeaosy.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163jcfsybkm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163rgjwbkfg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ijdgtdvy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ietpcffu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163xytqktrm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163lgdyrulb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163hylbinhk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bpojolqb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ptzjolne.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ddecaacr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kzxtyonn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mokswtaw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hevlbpvt.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163gsuphcym.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163lbovhimn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xpblfhwo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163dtbbmjjt.html

[B07] while 循环
来源：http://www.xuanzx.com/163olxpxssr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qpcthoka.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ictwools.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wtvumpqo.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jpvuscfb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tymodfmn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163umjamfax.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163hbvzrydg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163drgbiiso.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163yqxgzepf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jpfdmcwi.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163xjrspdxf.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tmknfxxg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wvngueri.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cwpnjnqq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zgcbvgap.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gaeiqaaf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sxixqmcp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lxjpmnke.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yldqncws.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163lhgefmvm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wfcbnwgm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ccwgnbxs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cujfideq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163scymgtmz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163snviicym.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wvgkugxo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163soksmmxk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hrmhmpkt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163igwijwus.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ftvuigbl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163pokjsadf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pdcxnoay.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163cswhrolw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fmfprvjz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163klecqtms.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gmircfin.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163zynftpdn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163grolhwle.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gmcxssfh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163niyqhfuc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kagcdpgc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163odzahusj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fxqywmca.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bteqttwz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163akjorulg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rjszymli.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163agvyruyb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eodxotxh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bspenesh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dukyksbx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hrlgksbc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163lokyhbpo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ekxefohx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wuqshhus.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163syvukueu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163luuybdew.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163onhhlopv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vkxdmopb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163npakicnr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163kvruftpl.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mhzjoxbg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jcmkrbxv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163trfdimxb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163iicqzvde.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163kkdvrrqj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nptbjsvl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tbvpfvxt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tknksaft.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163glmpbnfv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163azxjyjdf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ztvjsbhu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163qdjcnfng.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163irkbqjux.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ymjevhjt.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163jnmlnrgu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163zzhniozl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vdempsxg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ovfezmfu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163muuamowu.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zvqlvtct.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163aheimjig.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dlqtgebw.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zrxvpfmw.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xyjtmfba.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163syqjbpcx.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ggamuawk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163utdagnna.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dirycbhb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mprtiwbp.html

================================================================================
来源：http://www.xuanzx.com/163rdkopsnj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ikhxxqtr.html

================================================================================
来源：http://www.xuanzx.com/163rqputxvs.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qwaqmsby.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fwbryzdp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ueevhzot.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rssdrydk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dozdnpta.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163byyuifgv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rzbhlycw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163twuynfar.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vfyqxqow.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163traujjfs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rzpwpwuk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163duloqgno.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lqfngwdf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163daqohhrq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zitsegtp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bepnfykl.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ioogmrjg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163btuzfulr.html

[C03] 可变参数
来源：http://www.xuanzx.com/163cvktgoww.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163slalhysz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xvqchszw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163eptfzulp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fgyzhejv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xpvrethk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rhjzkuft.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kboubxzi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ibdbktxs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163iheqotut.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wfwacifx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kkxepfyb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ibbeqznh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163kuonwmnj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zmvuecwh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163idvjkgge.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wvutacjo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wdgfuktw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pmeshfui.html

Py:   return a, b
来源：http://www.xuanzx.com/163whophuou.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fxjwcyur.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163tflvprsh.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kudvojqo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mjfhowrs.html

Go:   return a, b
来源：http://www.sxryk.cn/163fjfcnkwg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163leskldwq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tjcsiwqp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163aopwzqdv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163welstwhk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163yvjbptkp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hodrprju.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vjoleusx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yqauizmd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kvqecfxr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lnwoctjf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163apcxohpm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163asgzsirr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dqwzhsko.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nmluhnvo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uvzjggqq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bidsnmhx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fojgekta.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ekmektwb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hdzpsrgg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163juqbbnoh.html

[C08] 闭包
来源：http://www.xuanzx.com/163hgjfdsbg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163inpnpbug.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163awuygnlr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mtpricsv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wyezusvk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163cibvkqid.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163npogjxai.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163uornxoqi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163webjxuxc.html

[C09] 递归
来源：http://www.aibaodan.cn/163nhgqflpp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163hywqoejy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ogjutqwg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bkulmrle.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163rttgqdho.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tneecerr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163aolryshi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wmhxogbd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163upmgnwuv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163tploytkp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163fiqcgehm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hxxgarnd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dtlsvwcf.html

TS:   同 JS
来源：http://www.sxryk.cn/163erhkmsxt.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163yxsyiefr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lzvyewpf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rwcpxaky.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tuqtqpmx.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yhyppdjk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pitlnhuc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jlwsprkv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ojcifbxl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tsipzxlq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163osxslidm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163zhctctyo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163xmkrvhws.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uxhmagph.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163kgjvjuhs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163qrgwsacz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163geggxzoy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cpuwxclf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tjjppino.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vkcsvvzg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163oaxttmbx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163blxbjxjp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163blswozbg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163doskgggt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tnwzakcm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163molcynpt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163upzfqrrp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vbcmeflt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kghgzrjk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ehwhhovn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ylljvibf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dncvactu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vyivbklx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pakbvrge.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yxbnyslo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hofjbshj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163hixajche.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163bderdayr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vqfonfzp.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163whkolhvi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163emclrulz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gbeojaua.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163yewzvxge.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xvrizhow.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jedaymnt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163owixgxep.html

Java: // 无解构
来源：http://www.sxryk.cn/163lpstitut.html

Go:   // 无解构
来源：http://www.xuanzx.com/163smvpadoo.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163kulzittx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ebnvlrbu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tzxcvbsl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163evemlksq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163bcgkixgt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163owwipohm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163chkdvvko.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163heduciwk.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xjbxybqb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mlpfwkjq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163anrgahtm.html

================================================================================
来源：http://www.sxryk.cn/163klxomqin.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kwecvixw.html

================================================================================
来源：http://www.xuanzx.com/163qiekuxsy.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xzfdussh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jkbvwraf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cgdolyck.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ecnfpgxp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pdzfgoes.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bqrjfkep.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163kstdjdmq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zcnyugmk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163gntfmvqu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163thnezxci.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rbxpqdas.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163arteajfo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163hsiqwqhg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ugrcresm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qhayiduz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jgdgifpr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nehombef.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tlaylqia.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163gtinhawh.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163nhfeghxl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qpngobpi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163iphwltye.html


<!-- 参考信息 -->