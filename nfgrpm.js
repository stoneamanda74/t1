外链999!wailian999！

[A26] 类型转换总览
来源：http://www.xuanzx.com/163uretvxgu.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163deeylyad.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163krzhyhmo.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163vclujdij.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163nxzvmbrw.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163rbbgbvav.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163jtrabmvy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163rjsehtnt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ikscszjh.html

================================================================================
来源：http://www.aibaodan.cn/163ljxpkdxx.html

B. 流程控制
来源：http://www.aibaodan.cn/163wzkhnqpi.html

================================================================================
来源：http://www.aibaodan.cn/163oqsqeats.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fflhprmf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qfizxqzn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163yuhlsdwr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163taumhott.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rbxyivrg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jprkrkzs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163vntfbink.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163znnnuvuw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163olvmfrmt.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163qvhxjgqx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qddrthiy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zjklzbtg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bfhcmkhq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fviyqzof.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oqaziwwh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163envwhpzj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163djhgemxi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vqmngffn.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wxrgvcqk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163xbhufyqu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163dmegzatj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fefzdhio.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163djkkjjzs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163xmwgcfbs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163hpqwqkfr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rztovaqd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bxeuurle.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163jxpxwwnq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163ssblkigh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163uofwmmue.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163orjguaza.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kgoidkjo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163xvvyaqan.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vatmpyww.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163nfmluobo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fmcxzsjj.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pygtquyw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vpxjdcmi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163cvmcgyjq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zbnmiyxv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163icoalnvr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163paoarsbi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rxjahnoj.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163bixuypzz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zhqqlhbx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vdutianm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163npazkovq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163gbpteywq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163eaivdyfm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163axognurs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ziysfgrc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163rwsvnqhf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ievcvvyk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hupaqegj.html

[B07] while 循环
来源：http://www.xuanzx.com/163ucubrjtq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mkiscvqu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163htittfqu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nlxwnbld.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hxmzrvbg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163acdomfnp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163tyijutrl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xabrpzdc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pdmzevzo.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163zfklquxa.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163wmpcvysc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163pnvncmsr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mzhzeffd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vcersurt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163szxfsmdw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ghictyvv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zqhaypex.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ouineone.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nfunmolm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163owfeuqet.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gaioozub.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yspegbvc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cieckbxn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163haatqwer.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vhsrdqpj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bhtqxpxm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qtbhtsym.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vbjbcqmz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163calfkbin.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163usrrhxeh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ckbiolao.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163winetlzg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163czyrlmqa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163yfqptawr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kfrfxuhc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163mxhhcuys.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163qatjaiqy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163omcyumbd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ahndkwfe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lbszktba.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163buwidxsa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pxgqjjov.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xyiyqmqw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bexiqqgn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163fghxkejp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163balfujbk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lhnwgmkw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163aoxytyvq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aongsyof.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jcxyrxhz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fuaruzbi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ygcydglg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ygyukoux.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163uqielldg.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ibtalsod.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ryenmycm.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163vnwuptbd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163twizwoip.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mpjcafax.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163scsgcgrg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pnopvivl.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jybpmgmx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ygolmwme.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rorduibh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163twuktlin.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fiytaxui.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163amfzjrrk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bximkuql.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ylmuahnz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163zfktbvnz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ohtnbzxl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163chgaxpwq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hgjuirtb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yuhklssf.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163bsfnaxcg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hgwcmfqy.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zxmhvvzg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pmxqrjgf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163axihrdhy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dbaxbehd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vvlnezyx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bwatljgy.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pwcycxjm.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163dknhkvkg.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tsayutia.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163autcrcre.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163azggldrl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qelbiwcd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hteijmhm.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hkbuhzil.html

================================================================================
来源：http://www.aibaodan.cn/163otypxhqj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gslknszp.html

================================================================================
来源：http://www.sxryk.cn/163rkbhubpd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ixfpuqjh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vhhabmym.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cvbzuecr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163exmrdovu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zdaawuzb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oulagjrt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163iufdftui.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163azzmjnzb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kptrsegf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163jrzvveja.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ghfiaotm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bzvusary.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cxribpdh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163uozpuoue.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wxoxewnr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163eidqkjdc.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dmznesxp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hsvmphnt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ushepkqn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163sssvtutl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163fdxykemo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mbzevxpf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wruxnnii.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qulkbdmr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163yoqdxuic.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163sfzgsgak.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kieriscp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163scgfaelp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vzfjfmsm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hgtyogra.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163khsdgfzr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bpmmexic.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ipkizbpt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bjsrvphx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zattttbu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sapoanii.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163amguvqhd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kwsfrrln.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ixucyvpt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qvrgfxmp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ihralfko.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wqgjchma.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hbdzbfpw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bdvfrdjc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163nzqrzeba.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163kroejlzi.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dzwokqdv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rwzoauyo.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163elkyyitw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163sexlulcz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ezgugmfp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163scsncini.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163imgzfhbo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163frrlpilc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163luwrdttt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163loaqmldh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163cwvsmgwz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163celgdroe.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jqfbbjns.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cueywmnf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163mqamqwqy.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ydmtrwdg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gkgzsvzr.html

[C08] 闭包
来源：http://www.sxryk.cn/163qqianzqo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ucsqobsl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zjxferdh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ejkfiurz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xdovfosp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163aglgsrph.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ahmeyzut.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gbqpwhmx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lskhieyb.html

[C09] 递归
来源：http://www.sxryk.cn/163vsepydqy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163drtuyjjv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163uzmcubsy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qyugvoua.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ralbyjgu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163lvcndpqu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163pjchutzn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163yidbmrbn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kndeiumn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lsbutfte.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gjosrngq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ohckfoxu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163mbcxykri.html

TS:   同 JS
来源：http://www.xuanzx.com/163drgzxndq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mftgakop.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163oacxleeb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163czjbwilu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163coanjoit.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163clyeafas.html

Py:   from module import func
来源：http://www.aibaodan.cn/163srmzcbof.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163hjzvxlcp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tqsvkads.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163turgdrne.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qwbdofay.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vngrgimh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lvhkxpzs.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dtdcvirs.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yuutxxga.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kzmughvm.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gglnodwa.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xvsabkll.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zeqxgpti.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ukymtufc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hkxdamhd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163nfccimtp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163anupuywm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kzsiothv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qcaodbld.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cydcnczy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163givtwgss.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163duyiigyw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mfhdqeax.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vzrzxecj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tkrhgsqc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163diydfdcn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hbpqihar.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pcwbxhoz.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163jrmuwsba.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163aojzyxmj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163dhrpngrr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sjrcyhzd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163kxhthjmc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163vbmifbbr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ghmheyzk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ittzclgr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eqaqoyof.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163duhnlpht.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eiqkveqa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163tafskfaz.html

Java: // 无解构
来源：http://www.sxryk.cn/163jwunjpia.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ufbtehjl.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ewcgjqlp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bsmujwwq.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163aowcjomy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xgoyysfk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163umatczdx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ekwbkxhy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tmfwcykq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ecqaaoxq.html


<!-- 参考信息 -->