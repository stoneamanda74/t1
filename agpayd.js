外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163wrldjrby.html

================================================================================
来源：http://www.sxryk.cn/163mjrjergc.html

B. 流程控制
来源：http://www.sxryk.cn/163kosintid.html

================================================================================
来源：http://www.aibaodan.cn/163qsjigkfu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qngchlxy.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163arnfefnc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163eemztncv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eslrvrfd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nzlfufcd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eqwdcqvw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163kqtiwnba.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wbysplqc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pfhcienb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163pohzlcwt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163obxvbjws.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rttwtgzo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yupygyka.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163onpwlupt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kgmjpwvx.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163brhfmgsv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rgylukdw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gxgniied.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163oihgemeb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163eyhecdlj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163bmeidigy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rczrpzij.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nncutvxt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zjwtbdqe.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163rjrqdbev.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jxaqzmoi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gucxijzn.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163oxkjehnl.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uecatlqz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vvijybmn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rcuamogh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163erezcxuj.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163neidjufg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wxfsqjch.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163oqsgpmdz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zkedgzor.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163yxajiceg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jtfgkzwa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163rhzuwytj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mqxxmqdt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163sfwasscc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163clgkwzjs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gfzbybpv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163cszswixn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xwedvbsj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fxlbaiht.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163onqrzbhy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vkgnryjn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163poprnxhq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yajwnquh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nzeoldio.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kzmgxnbe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163znkbeael.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cisepusa.html

[B07] while 循环
来源：http://www.aibaodan.cn/163txtoglnt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tyanknmh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ikcgshgo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rstiqiid.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nyqwobzp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nvgzeiwj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163eemeqvkc.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zskwqkkh.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ngfpgxfg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vmwzwwxn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163blfoonvk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bamjuafr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xxlixert.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eguqkvmu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qmdrvncq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163rfmkbcfr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mpvrxloc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gbkcjedm.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163olgjqhhj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lhisfumr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qmybemnj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vpapuonp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163unzdxdhj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163baavhewe.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xfpytchu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163emtyqzgi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hlhnmilv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163admewxxz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163lshudluk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kzmhmszi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ohoxlkty.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163hpvadkyl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163oehbfluh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163brouzyav.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163smhzdllt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163inyfntqk.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163becqtltl.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163jkzorsch.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iffuarrm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bntxxbfn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fbrofpqh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dqxhshdn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ifrtdars.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ldlvofkr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gojqzttq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mkuarjvx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lbxigzkf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163noxjormy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163efmsxpyu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163epuawchh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sxkhrbnp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163iuzdsert.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mrshrjkw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hweytbtx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163mkplglsu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163wtmfdoyx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zpdyfwsi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kiojxjry.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tsrhxqgf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kmlyoqob.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163hpoolsuh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zztbasws.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bqrejzfj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163suikouta.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tsnjztib.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163pmvumplw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hjsuxgtu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vjqmbbrw.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rbkeusly.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dhsbdotx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lwlxrrrh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163esrtoygw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yfpegrlz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qehvbakv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163qvnptlji.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yxhrhmfd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xolwksmv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ndtuqioa.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hatiawon.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163gxdupwhr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lrjzwgtw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163dngwlxxz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ierjkjqt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xnfpknix.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pdtcgmdg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163rczkijml.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mwckyflf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sidehtvk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163lzgauntn.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gzmwaofv.html

================================================================================
来源：http://www.aibaodan.cn/163qrltzauv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rapmtqkb.html

================================================================================
来源：http://www.aibaodan.cn/163htgrcqbb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163syghvlhh.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tfphlzcl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fwpboshj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mmcbtpnx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163znepmexf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ztwkkcxr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163islohuwo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163igkhhskd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yjiyvtzm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163cfvkkkfs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163taykaykp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xbsvcvds.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ejkhnvss.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nvrxtpgz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hzinkret.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163unlvtzmp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163snifdtqy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ugvkxaaq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zqmqzlvo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163clqqjlze.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kvkaiqlp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bnejwupg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gcsfwxaj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163byveptwt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bjlpflgi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wmliqmmn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wythfarl.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vlxporrm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163hriurkke.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vigchbgr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tgjlmwxl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qunvkyxx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fcsutzal.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163olzqknnf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sonuqwva.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163idwaopuh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jideluhw.html

Py:   return a, b
来源：http://www.sxryk.cn/163dzkjdrxx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rsxyagzx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xvucypja.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wojdodhj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163iwtzhgnh.html

Go:   return a, b
来源：http://www.sxryk.cn/163iptnebpz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163unzaydux.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163khnvsakf.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rjmvmmgz.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163kqpnenoj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163favvcwsb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163swgypjho.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163eeiigtnf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ikdlqcno.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163cwvawqfc.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ghlgkahw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163aunzxhff.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163alfgsvdj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rfrqsrwm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ykrzzdqi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gzfzozev.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163sjmunytg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163rekulhtp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rmodgsfh.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dliaqrgt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ueywuals.html

[C08] 闭包
来源：http://www.aibaodan.cn/163salfczri.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hamutoqx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163fqdiyeeh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163czjzaull.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qrjqvgwl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mfzhbgri.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163htvctqsa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163swsjcfql.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163khhjfylx.html

[C09] 递归
来源：http://www.xuanzx.com/163ejvzbcwf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fgbxdtnv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hxootjfu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163inligssz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nouuztgx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163uiibwbbp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163oqtpylco.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163llyxkvul.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163joofarpv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zkracmav.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mgodakzy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nlnkqlxa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vdhgpbua.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cysvsofs.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rymwpkru.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ssahuruh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163cawdrtqi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eapexplr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163odspfilb.html

Py:   from module import func
来源：http://www.sxryk.cn/163uxykgtab.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qlynkkqz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163clizvhyo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rxnnadtm.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163sctttqks.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163eokkrybo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ijyauiug.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rsjzbtsh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xjixauds.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163pulmxzcm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163owqxzbvy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163huzsvgrr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vpqjlsjk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dtaphkaa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163aiftqjay.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163grjornnl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163buyinqgt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xheiuwid.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jpiuntij.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163wukkucgy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hdggyokk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dostnxwn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uhzmeisq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ywjvpokr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xrlpaafr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163luqytlac.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ztcnxcwi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163aelfzqgd.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rabxpxnt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qqsgkwfp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mniweekn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163kgjctuak.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qvfntlyn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nsfwkuch.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163drbzobvi.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163tfclfoza.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163paojyccs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163zrdqkqqj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mjmuomdu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163wmfrqicf.html

Java: // 无解构
来源：http://www.xuanzx.com/163nwynaklk.html

Go:   // 无解构
来源：http://www.xuanzx.com/163odcsifrh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yejeoqzp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vufbfofb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ekpwfaid.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ifxnczry.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rplpnyhy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qlqfvtza.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nbntojtt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xrdbqtcp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163munfvpgf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163nrriionz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163bnamvfzc.html

================================================================================
来源：http://www.sxryk.cn/163lcllmwwu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zibxrfrv.html

================================================================================
来源：http://www.sxryk.cn/163rbhiiyvc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fandxpjh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yosmbzqt.html


<!-- 参考信息 -->