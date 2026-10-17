外链999!wailian999！

C#:   s.Length
来源：http://www.aibaodan.cn/163bgtblwbs.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163zixsxcwi.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xspltheu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163vbukocpz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lcvscjly.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163iebakulx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163neyowioo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163uqgfijeu.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163qonzixie.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163fldsgnrk.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163emejnidf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163wlecazpc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163lqosimab.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163moaxtgfo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163savjeofe.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163uwivzlea.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163xfvevodb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pfmgvqgs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xeckcdyk.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163arxckxnl.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163pwdxecrk.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163plsgmesb.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cqgpltab.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kjvyznpc.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163vnhhqdet.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163uaebkcnk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163sizstdva.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163zmyciqwg.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163tfxogcob.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163smuhaurz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163dkvhcomp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163mimvcjnz.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mtnjzvjx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fpnmpzbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163fkincdcq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163vmqcrbzs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163wmltsiua.html

================================================================================
来源：http://www.xuanzx.com/163wvawdlmd.html

B. 流程控制
来源：http://www.aibaodan.cn/163bwrkhtrt.html

================================================================================
来源：http://www.sxryk.cn/163cviyjkrl.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vzggsgbx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163ceharxlw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mhutsfzh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ysstxgug.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hgghhcsh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ervhwfcz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163teayypwd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pinlysab.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lbuzytyb.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163fcxefujr.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163mnzpjcjc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163puxtoguo.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qhjqsgod.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163reqdtzck.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pnxvwrsp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163umyddury.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ausemfbn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nnvaytyd.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kuipemxy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163dfykmcvg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nnxushfs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bsioipvp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163aiglfjrs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163fiukxeuv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lllhdrfu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163lkuzxwjk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jykvdkaz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163kcijnbbb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qyhxbjbx.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163bafrpvyk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qnjddbuu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zyekitxb.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163dpiagqyu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163nhesdboh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163skrmuqyb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163bmptodrr.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163ubrnqkta.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163sklikrpv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163cduzaaap.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xedcnnvd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ftvrluqc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163nzyzqrvl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163iomvozdq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163mujbniii.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pchanpxa.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ycqpgqww.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163obudqrpt.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163somayzpw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163vykmhtuv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163byqyyzhn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163walxujyf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163lwegguac.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163krqmicdf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xmdnvfck.html

[B07] while 循环
来源：http://www.sxryk.cn/163onrpbpib.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163glcuvyse.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163iugrobad.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163anmxshox.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fipkhirs.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hhcfmvvv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nararltk.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dwtsynwv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uiedejtf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qhtgwqsg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163oyczebln.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ggpcfhym.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ouzmdtvj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rmkeszyf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iaxlists.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163nnqlpmwq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163umehvttn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cxmvucex.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163uqjkbmis.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gqrmonxu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163lgbfvncs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cgywkrce.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jcmfpjfe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xrjkvbnw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163agpmyzgl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zkkjjudc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163trjoszcs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xaaswzek.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mgcwkpuf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tkenryoi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qxqqpwta.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163yqnlvnlk.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ivxhdnnx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wtaanaml.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163eplcrlzm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163dfcvzkke.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pwuzvisv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163srapfrwv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wrkvnniv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jkyfaurz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jwgwqhpg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163nzcalzuj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163udxtobju.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lhkpfprw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163shbhskte.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gzsaxnos.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tqhfedcp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163jcccsrhw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sztnjvwy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uaetwyyu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sscjghnr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zpkbasfk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163snnfxhew.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tdsicdpu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wjcwelwi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qchruypw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gcnkiafg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nwtsplzp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163emwsjiqi.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tpvfleua.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xooccjra.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163iuuxlpbh.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163onnjddhv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wxqlrsng.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hxhuwgfo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163npaieyjw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163phjafyql.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jjxzdkbb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zuctylam.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lgoliwvd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163feziptws.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bxqyzjgo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vswntugz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bvwjbnjc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nrgvuzsc.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163nwdxxwav.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ugryjpfw.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dzladtmu.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163tofzuwar.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163khiwpaeb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kqhieudh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163etcenhfm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kgsjkpfu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mimojwaq.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xfxtgvgy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163avckroan.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163epsirull.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mrpxumil.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163icmrnrgt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bvxfougl.html

================================================================================
来源：http://www.sxryk.cn/163tunplbyt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kvndzfty.html

================================================================================
来源：http://www.xuanzx.com/163evmntxio.html

[C01] 定义函数
来源：http://www.xuanzx.com/163duklksek.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163wyjucqfk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163geltpays.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163gawaxnvb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mldrxytg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gffertjs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ythhbfqv.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gzganxng.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lbaiprhh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wwisaxpg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nmuwjsmc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bxjgvwxk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163eiaejgql.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vxecensg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kinkfzob.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hlpcjsmc.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163woqmcinn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zmbvlyai.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nheqdybq.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ekzzavne.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ptcbgqef.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zcvxypbu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qeairogs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163flelcvyz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163zckasczd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163erkdkdeb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163huafoput.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ajoddaoa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163brqcvxqe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163tznygkuz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qgwahrov.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zmsazrwc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pjosldsx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163rzduwpql.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eantalxt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ckxlxjbo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163acyuggkq.html

Py:   return a, b
来源：http://www.sxryk.cn/163vpvwdrsd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vahahjze.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gilcnwli.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163unbgpbgm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163buqhbkom.html

Go:   return a, b
来源：http://www.xuanzx.com/163xnjlkwig.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qmqataqj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cpfnszxv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163nejcgqwg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163azhzhcin.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lpiynuol.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qcdqwvbr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163gdzbnlij.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163awasczgy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163fdkqirua.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163jiqggdwx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163clonwoql.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wzqphzop.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163offxqdki.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tfsdfwor.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163srgdfdul.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163kycwfxds.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163uybrnfoj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163jjpsxsmw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mlkhainh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rqndalsw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163hzvvmhfv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ecnoynus.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rksnvxdm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hjumnybu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fgukzdre.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163oumdejxp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163rxnrinmt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163aymjpopn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ciulbbbu.html

[C09] 递归
来源：http://www.aibaodan.cn/163nejdkpsw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bmjjnqcj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163asmoispy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wbtcnner.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ekxuhjfp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hnwbxrko.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163trjyxrqm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163caifnafv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nyqvolsf.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vwimctqq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nyokmxur.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mrjkckxr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fdgqydau.html

TS:   同 JS
来源：http://www.xuanzx.com/163uiccxmro.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ekrcswrw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vkmqulho.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163idzehasa.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tzogrzcc.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qxeittuo.html

Py:   from module import func
来源：http://www.xuanzx.com/163eyhboyqh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fmmayyza.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sukoaxnv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fgmcxabv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qclabsug.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163muzqeppu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163megwnxya.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ofxpxpls.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dvdarfpj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nywjnswy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163uiidtkwc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mualkgjg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hooxhitx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mkbddilu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163qylziyiz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wkoywfvp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163aphteisi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163baqjudqd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hxulhshg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mgfxzetf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dlxsphxa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jrpjxhml.html


<!-- 参考信息 -->