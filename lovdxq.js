外链999!wailian999！

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jnrebgbc.html

================================================================================
来源：http://www.xuanzx.com/163wpxzwlky.html

B. 流程控制
来源：http://www.xuanzx.com/163eiuhxsbr.html

================================================================================
来源：http://www.aibaodan.cn/163ibubrzdm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163dojgcdyk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ulsvpzkj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163destajyi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163noxzavto.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vcecsrpm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ukufzkje.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163gupdxtwe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163elapkksq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163exdrhrwn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163fxlcddzb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163eooazqkb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163votbspls.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qllucpva.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qffemhcl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uhhicrie.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163nwrglhaw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163kuaxytgi.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mestawxz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ooqomtgq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163oryqywqz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163xmixohlv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wablnkcf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zvyqtfzd.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zijlamzt.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yyazxiwn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ujldqjbb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ojxctkbr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ciuyodwx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163axyjtjog.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163gdtkdood.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ovffrmzw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hfmozpdp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163btkdfego.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rtfboxrf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163pmzkqsmh.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163lcchlpfo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hqwwyebs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ieutinzb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163biqjknpt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vlwniaue.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mblwpbtb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163yjcgpqzk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163qintikrs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cwixvfmb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163czoiwued.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163hdvlcsjw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ufgkzffi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163bgrabgsr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163klqbwdpm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fidqwfwv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163qhdrnern.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gtvgeeep.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ehzvbsqk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163syftcfim.html

[B07] while 循环
来源：http://www.sxryk.cn/163rzlwqdts.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rohpwtin.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pvwlkyra.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yryonqnt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vjurevfm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yizcnnmo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vgbhotgl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wvskzaiy.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163unwrvhwm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163waczhpeu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163pjouqjbo.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163iwomgobx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163utmsxyux.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zrvvbdee.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uaiogpvb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163uijilztm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jklvetss.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wdegcolv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163dzbjiunn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163evgczeig.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163idavzjxq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163stxtzccd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kmcajlwh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jjhfdqve.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163eiuesgyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163sjrpqngf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qmrgxqrl.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163dfepkwia.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zlkqzwjj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jfsrjrgs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bkpsgzbp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ehnotild.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rgrsmhli.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zywbdzds.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163eokghufr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rocbedcu.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gnkyjqdg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bahepnuc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ianftujr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163arphviya.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163eghzjybo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163oaacvzha.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163afcvyosb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hndvhsfw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163bvklczpg.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wnurbpto.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163gpmvtkbf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lcfttwfv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qyljzzdz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163azqtqsja.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qjslcwgf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zofhzotf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ungcfebo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163getnzpro.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ecytebrt.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dpzqdsxh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kjfymkey.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ngkrjion.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hunhslnd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xfvyluvv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fzlbudzx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wobkdlvg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163acqeaodc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163yjtxknjb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hopkctus.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vsobuanh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rrscpbrg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163exiltasu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gzajqueh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ihzcuinj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163nqanracb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163gpjxnnrt.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163tseltfop.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163nuzhhawy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xedilyhf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xybqqfvz.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163sekuoidi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163schkyqcn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163dwhpjdwg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163schmblsg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ojbemwvh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lershutz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mvxsjebg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163cvfpbmgn.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cmmjnwbl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zdaqnmal.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163siyhexac.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163psyzcubq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hpjgoaqe.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163axbauhei.html

================================================================================
来源：http://www.sxryk.cn/163xprtvsqi.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nfckgwdp.html

================================================================================
来源：http://www.aibaodan.cn/163hdznpvtn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bjcnxckz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bofqfbep.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ycxvfnca.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163weiekiyl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fpcjdnur.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sxdsmcdz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163kuugznxw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hahpxkob.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gdnamzlw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163biyshptw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163pkktwygj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gcbkwxnu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zioknfoc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zuclmdyz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rystwoql.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163yrhsqhxj.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ghhbqugt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163zoxncive.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vuaecqqt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lrkunhmw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dhfgjrbf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qtdapakc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oaqvfjbw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gjucxzaj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163aooamtdu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163joxbomie.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dxyfqwry.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pmkgbuhr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zcxzfszv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163adjtbcel.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163dbraonhb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163sczcmrwf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ggsvxuwk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163mftbifzt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wdkjplhh.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wihikawa.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jwbmijkx.html

Py:   return a, b
来源：http://www.sxryk.cn/163oaakwlbu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cbggegiw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kjmwwizk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ecybdwkd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uqtiqokv.html

Go:   return a, b
来源：http://www.sxryk.cn/163hcfntmar.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bcxwejtx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rpjxkmvs.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163iljidaiy.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wapfcdhn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hezytcyf.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ibiefkal.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nogqmesp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xljkppga.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iemvxbgf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163egscdqfb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rgqbhdsv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rirjmkho.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163kwzcdzdl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163itnddtlf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vvjfuxnh.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dolgpwcf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vmljipfh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zvamsgxo.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163alkjqbkv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qqjtacak.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ztjmxuzx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dghbxdng.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163niwckhlk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163aathapzb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wrcmxlaa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hwwtynmb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163aimhrygl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ykflonww.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fqkuolav.html

[C09] 递归
来源：http://www.aibaodan.cn/163sjclopzt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pyrnmzvy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hyczkhqe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rblyimpo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aqtibdel.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zgnacmrp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nljpsbwy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pytwnrfn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ybmqgnnd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bdepxvvc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163sjdsqbhz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163shcneefr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jhprejeo.html

TS:   同 JS
来源：http://www.xuanzx.com/163bcvutbob.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nrqzlfmw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mnwhrrsd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163garkysbr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pbiiwvbj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lsfmelqo.html

Py:   from module import func
来源：http://www.xuanzx.com/163uxxfbzwj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163eozfestz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zcltutzu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163knxqxxbe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xqloqpec.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jqookcnc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163aitxycqk.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hvqjuorr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163sqgnlyeg.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rnxmwjlv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tcwpnrrf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nevnrvkx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ocnnpkpn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qvohgjfv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ernwlylo.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xmfcwcgf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jwquovgl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163oukhiowg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163psynqnpl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lwelckuh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qrodtkqv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lredzjxt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163klqphrok.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ajqhmija.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163qemyxvwa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163crlhzvxg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dprfyyep.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vmgaqlct.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lckqirlb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hwhhsmoq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wcksqohe.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pjdiyfwy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163eqsudbes.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wppxxjym.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nvrrczti.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qztdijhn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vskwyyhr.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ycjfcdur.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163glnklypt.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163amjjtjue.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ciwggeno.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wibcmldu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lpynsknl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xuncpqmx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163qscmtdmq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bbhsqhbk.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ysplnctx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163camrcfng.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kpznaxpk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163iqnenjti.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163iwlmdwvb.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163adxbncvl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163obusdkhc.html

================================================================================
来源：http://www.xuanzx.com/163ohruuxkd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163tehhwikv.html

================================================================================
来源：http://www.aibaodan.cn/163rpclqlff.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163myxmfxhm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mejxoqgi.html


<!-- 参考信息 -->