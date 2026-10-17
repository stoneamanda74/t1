外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ouxueydl.html

================================================================================
来源：http://www.sxryk.cn/163flzdafsm.html

B. 流程控制
来源：http://www.aibaodan.cn/163dstcfaka.html

================================================================================
来源：http://www.aibaodan.cn/163rkwachhm.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qwdlzbps.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163asvkabez.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163vtuosmmy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hzosjnyi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eckrfegy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ugxoypmw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dsifyrlm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vsiizgir.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ammlusrn.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nvjkljll.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163bfuimrik.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163kokcpyjy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cdspkiur.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wdflwkmc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163utvtjveg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163bxyhpfpn.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163xzafogqg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tcmtbbma.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163vemtfjvy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163jmchygnw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ptfaohma.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163itflkfwg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vukuqdnf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nzcqooin.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163sqvgrehe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ckndgczh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163sroolzax.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kwbtwkmg.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163adiwucxy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163iigomldu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163iyktarun.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jcrxfwzv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163imigtxyk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163roxyhowk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kawarrcf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ldboblde.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163asecoivb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163folziouz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mixqhudj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163taicumsf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163brfiftrv.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ogvqfcwt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zbnizonx.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ldvazezo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kapjvvdu.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ogiflkdw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vwwtnazq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163nmbdpmti.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vxzoovix.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163rpsyhhin.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163bjtlgkpp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bpqvqfps.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ejmsammb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163eyzhtwbj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163itnsikzw.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ndesuqpf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mjqkybra.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gquqpofn.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pztfpojj.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gsryxqdy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163xwvtsqsg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163twwpgzmn.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nyyleubr.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163exbexesl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163szkrkwtx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163unvgxrzl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sjmdwnwq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uhbyyltt.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fjzfabkl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xvfwahaz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fchxbbzm.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lreioowd.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163eimhvuhr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qpvjgyln.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163tgkffopq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hqpmvzib.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wgpwbcmh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kihyusbb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163olhkelsy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zhklrzzw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163awzgxekp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hvkxhvha.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wuxwslmt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rnuhctcj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163abslicja.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163iqmspgvq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hfcojjux.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uwsywgmr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qupxqhky.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163hhsyughp.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jfkzryph.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163etwdmcqx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163thhsmxvn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tzyqobhm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dzkmsxpt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wvnpsvfh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163xrzdbnzp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mcjykyau.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tgwlbbgk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163dkfnplrc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uksmaggn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163zqxuebwg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zrkgylkd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163chobhfzo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ndtawsqe.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163hvipfive.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163stouwalf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163utmockdj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qcskihvj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163kwiwnlgk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163yidkwgrq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oggzcxhs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eogvqysw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zqftvhjw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163otxwtvjq.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163otadteyo.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163atjnrhnx.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163mmetdsfy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163aworpxcs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163pcsdzius.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fejnmrqb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vxqbptij.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ssfaffnf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163opomollp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ewrcvqez.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vhioyujq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ujkawhci.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zxadcmry.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fdgxtuut.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163byjeuhfi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163kvqbkeoh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gsjzgouw.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mmhninfq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mkffnxgr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ftkqxpnv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xbysfjos.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163dckbmncj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bwpcfczt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ogmmldyp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mpealrqc.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163venfyfqp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163onkfhmjs.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sanzefgn.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kdxbrvmi.html

================================================================================
来源：http://www.sxryk.cn/163rxiagehw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bvmlegdw.html

================================================================================
来源：http://www.xuanzx.com/163capmxzlh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hecieplx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ygvlhmuk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163clilpuff.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163wnsarfym.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163udxqfpfa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgwizhlm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163orljjovp.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zqotaoaj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rvbqwcdu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cdmmlrcg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163uycqgpvp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qoqyxghw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163oybiedzz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ipnzfccg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163sjytqnwt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kscpqkwi.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163tcyvsvmz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rkvaqihu.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nhactuox.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gnzcguxy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bupzdnyo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163izjvomif.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163idzuijrk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jblsrsqv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163obyponiy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ntcournr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163skaexcrd.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163rlivdfbm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kypwmrto.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uvrcegqt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dcejjzvw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rwjnssmd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vjzlvmio.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pbllrkvs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zbificdm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sfupfpzo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pdisfqmq.html

Py:   return a, b
来源：http://www.xuanzx.com/163ueklxjhf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163oohmzryo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163chvhuijp.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fasqzasi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163tilosren.html

Go:   return a, b
来源：http://www.sxryk.cn/163aukibvet.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jxwqpjzj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hihkqgdl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uliqbndx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163moqosjqn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163kzqrkmyf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163humjbzix.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lnygarhu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163leoiniep.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163stlhtrvu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bwiocxwv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163cddimelw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zdllbvjx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mdwkopqc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xxmzhlry.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fuykcmuo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163nfxjmjpq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ofxchfgb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zwzzhict.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dxyrrqos.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hunjxfpp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163thiwijio.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163llzpwnak.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ejtkgsoo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ucnkkvdl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gdsbmlop.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163atwnwewv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cornfzxv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ipybymel.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gdgnbpzv.html

[C09] 递归
来源：http://www.sxryk.cn/163rblzbpzk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163aovblfui.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wdoeprql.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fchjnxzp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nussbdpr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wdzxzukv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uzjrojxs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vyxqgafm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qjouuwgy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ztnbnrws.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rrpgyyyi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ipgritig.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kgraubqe.html

TS:   同 JS
来源：http://www.sxryk.cn/163djiwggxj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163psgmdwgn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163wnryezth.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nchhrbee.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hicayavo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lrgjgond.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qfcixxag.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163kbknynoa.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lgnydfrh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rfmwlitk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163svogcjjv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163uqiglpff.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163fbnkrclb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163krdqqnwp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fgtevekt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dlbpqtri.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163zetueifh.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gfadxsmg.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vevbfxsj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163fcanqihg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163lkngtxzh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gfnirfgu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nzmnpmzc.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bphouqgu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mmluseml.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tyqjztix.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163nnctphjx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vxoisyxm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xloqeigw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cuwonzpt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ptaehqih.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fjxizmuk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ohudogqm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163cstwxcpl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hxhtnssi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163vjtnoqch.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mjapuoul.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cgvxyked.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fgyufejp.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vszhhaiq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163unyvszrw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tldtfuyu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xnbryoiq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kkfsvxbk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ppmkduua.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163oaqvvbup.html

Java: // 无解构
来源：http://www.sxryk.cn/163hzveioqh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ipuogwpx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163andemfqr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qzswusay.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ipplcegn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fkvteagc.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163svjhhusj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163eeonzhdt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dhxvshee.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yrflhsgo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ouwowqpw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gqgdxztx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163cyryxopx.html

================================================================================
来源：http://www.aibaodan.cn/163glkkgwxo.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xpqqvshj.html

================================================================================
来源：http://www.xuanzx.com/163dyqsdmoc.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xtvetypb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163aayywtmr.html


<!-- 参考信息 -->