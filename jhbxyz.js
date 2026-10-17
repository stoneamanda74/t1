外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163arrffqqz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bdxojnud.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163koeoqogg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ykypgaob.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163gcqzgylr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163bmfdmzbb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163outjeral.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ytlvualp.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163uomlalru.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163iozcqhwh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bsscbbqj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mcglqzbl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wqesudvs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tcsufkrc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xjfxfwzg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163yshxoxlt.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163tjbvxxjd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wtmamaqb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163lmhxzktl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ucfkwqws.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163sgwltkda.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ohkemgby.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163odhskgbu.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ofwhjncd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163hgggfabc.html

================================================================================
来源：http://www.sxryk.cn/163pydsirdb.html

B. 流程控制
来源：http://www.xuanzx.com/163avbwfsnu.html

================================================================================
来源：http://www.sxryk.cn/163klrgclwf.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163wfisyukb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163hbxqzmdk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163yuqbyklf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rfmxuqcz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163crewlefx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iimtqprn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ryxedeuw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163jserlwil.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qpxsmule.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163xxdxfrbc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163klydoags.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yytibidd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hdovbkvq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bxwgypnf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163phnkzvbl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vxxjeksy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163amkcykjp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163acvwyjew.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163lbxdqbmp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163kvanxhgd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163joascdlc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163holtteki.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jmcineui.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163rnmkootz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163bnlwhiar.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163yhayenxl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163tfxqbbme.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163yfihgeki.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lazpjmmc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vnzcthfx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pijyzgjx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163aynjuwau.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163iabgqxbr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163gwvwphcl.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jfpkaepy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cafnenhf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163imyrvper.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kobsezcc.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163zuxjwfhw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uyvcmkvu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163snomrdxr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163hbvgsjmu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qwdcpcxr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ugelqtsh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163dxuxdgub.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jtzstzpb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163skmvxgja.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ybamrwiv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hiawlrly.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jzezdzka.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vyrttvam.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163yvcwgvrk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163omgaeaqv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wxijivjs.html

[B07] while 循环
来源：http://www.xuanzx.com/163rcmzhisa.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163tuobbfwy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163cbyjclmx.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ugquajzl.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ymlgpgwz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lypgdmmv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163srmhbwnt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163flvbxltl.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bxrydyac.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163vzynuvyj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163fkuzzmur.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163kehzrfgc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nrqvakxd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xwbrpqvc.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gjrjytvr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163kgztjwzk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cyqqtsmb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hbouzpbi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163yviwnpon.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jepvuzta.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163vfbajbxj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qwwbpixg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vwkzsiia.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163obdprnka.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ogfrdcyh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163kdelftea.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hwzfmtgg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vslzjdvk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wmjtzove.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cqchssnt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kpwsghvr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163hbjulcxs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163iedpkxjb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lpqcwvgm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163liusfcmz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163skbdfwlo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vcoiekuv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nnujsjpq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jowrlwab.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bceqituv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jdyfaysn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163tveaozmu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163sdmycewm.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zwbbqwnc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zziiadck.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qxkaidln.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163oiphrhzj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vyztmcjh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ddrnqmfb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gbtamvka.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163iymzqvfz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ocfttnhf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xlfjxfuc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fkahyyey.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gzqxpeyy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163leixjoxu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tztfibwk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ielrkoot.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xcvggwjj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163crwrnbwt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163xldezjqn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163qcyqlxpq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ybnrhtte.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163aguoaidy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zmrkrfct.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ehrwcvhj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rsamrygf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jptzmhad.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163etdqeiwo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163skmtutzu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uzmenope.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163brmvznvt.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163rjiabony.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gmtorjxn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bowtpmvp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ghquzryh.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163epbuirhm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ymdaexzp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qnqwynyh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mwgydchd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163inimctmh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mocnkbsj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163lbforjjf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163upnoneyy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163uuanybal.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ovvemgkh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gjjhbeza.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vhljvgkz.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163irwiknrf.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163cgojiieg.html

================================================================================
来源：http://www.aibaodan.cn/163kwnambrw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qxibtmjm.html

================================================================================
来源：http://www.aibaodan.cn/163phtfcvee.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tcgeaqfk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pkjpzvrj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gstenhsb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cltofktp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163unodyduf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ixmhcxrj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rnlkjajm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ncekpcoz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163axegzaiz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ldbegkhc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ahszmjai.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hliaoslk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kiavzoqy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zajrwjje.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163khdgqiuc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163uavpmolo.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163cqjrhbrp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tiqaljec.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jyqdxfhp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163clwbmaif.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ihbreuqw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163czehchfw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163navooiyu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163sgcxywqe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163daxfrtkv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zivntslv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ruggjpru.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qbxmjlbl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ojtlxiaq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163kmtzchsh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163foxlulvk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163knuaxlbn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hczjhydt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163drroreag.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ivemjcpx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rlejwiro.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rniaeehb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163stexvpia.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163iatknbom.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bstadgmz.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vkxdqbwx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163lyiojlbl.html

Go:   return a, b
来源：http://www.xuanzx.com/163dxgvhlto.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hvagelbl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163esbbqhao.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ffvmuwdu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cnkpzxew.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163cmkdhewu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163mgfaxpvf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yaddsmob.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xfzeceni.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ordlvlnf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163poblfmmm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163dtxgztkn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dlehqnrx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163bibmjkza.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163xccpfqdy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kjadicjb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163sjxouimz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163inmffhzm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zukfarij.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dghveypt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bptpgage.html

[C08] 闭包
来源：http://www.sxryk.cn/163wdfmhnob.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lsuzlztz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163gmxidnjd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uhxbxnxe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cnalvghq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163cujiwyan.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tgagocdb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163saxqbagw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gsuvmzhx.html

[C09] 递归
来源：http://www.aibaodan.cn/163zmbxupqi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163azoujnby.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163degnnowg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zpezlibw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wfdigfon.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ohpqjtqs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iwrniiqx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163agvoszyx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163smyiaseq.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wyczfbgv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lbtklmga.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163srtfqokb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rskgqnoh.html

TS:   同 JS
来源：http://www.xuanzx.com/163ytvrnhwz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163asawnbte.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jlknsvpu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qekavlic.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163rvzkuqit.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bukcnitk.html

Py:   from module import func
来源：http://www.aibaodan.cn/163kspyavec.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lvndyydv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163iczohmbi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zwjwwdwt.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zsnqqpqk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fqfuqscz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163syaqnmfc.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163duwmhguy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163txdmiqar.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kzmbannb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xowtkufu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163krgukzii.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cqucaaqf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qeqmnjqc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mpbiyunb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tbeztztl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xgctsgko.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wqwutflr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vsireegj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ggqkvmma.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lfbarclv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iexspedl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dibrpxmr.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163oxsfdiea.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xaexisto.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sxgodwxc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163hocjlhxx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163qrekomiu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163gjolaceh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nndgfbqz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163bqzcqhae.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nszhjmoo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163scdqtawz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fgchhxoq.html


<!-- 参考信息 -->