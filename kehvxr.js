外链999!wailian999！

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ohndchkq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qmenqfot.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163bgtceqbt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163sevgdvtp.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163kjttpscd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kjntsabm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fwlwynid.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hvpomgln.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bfmcndsg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163unhihsgi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163nrfnjtwd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ljnleqhd.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163habmsecv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ohxjsqcm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xogosqbv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rvuijyle.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163doyqrhsa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zkhkvuje.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163esdlcpso.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tzaapjbx.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163coxsnzib.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163igrwyhjq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163abtozlou.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163oyccfxmv.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163tkuhzjtw.html

================================================================================
来源：http://www.sxryk.cn/163bsowdkse.html

B. 流程控制
来源：http://www.aibaodan.cn/163svufkixw.html

================================================================================
来源：http://www.sxryk.cn/163akeojpwd.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qhbqqwnu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kvbgmjbn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163omaioefp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vbtpijkk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lxltryca.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ccqtlijf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163shqzbsmm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163duedkpqa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mlrljjbb.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nvirlpnd.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163svnsfyor.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163fhkiifke.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ancehttq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dbnsmxgx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163prgdbjva.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zehauyfi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163abvxpsom.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163syyjvkok.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xfturxtc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163orrrkowu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163vfagywsq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mrofnnnw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qvnlouux.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163plnayqcq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163gwkrbtsz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163thlbfhld.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163hwjcbxwb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rqqxvizz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163satqesjp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kdzrljez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gcwnhoqc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163cpyjfhtp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163byehlfex.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163xrmjewhw.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fqneukwa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163yvlrimwc.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kcxqodki.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163pgcnaohj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163tbwozaea.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bapybrmy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hxetbkjk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nkqigodw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163shnuzpxx.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163udmvonnc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163eyaconju.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163eqdmgoaj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ajcjaayq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ervwpsyt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tyrdqygl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qjwdpbsl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163frxbxiza.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jrkwcbqt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qanlwisn.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163pqjyamvl.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xlxjsrit.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163hbiscduk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zgrldzpp.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163okbeaqqt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qbjpdvlm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ibygyfst.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163elmjbkeu.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jufsclpt.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oarecqwf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163arzrydoh.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mdsrpkqe.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ihicgoqy.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mhqhlzny.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uohjxgll.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cvxcoayc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xzwntzhi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163sngxsuda.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xnaupjsb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163buiihldb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163tzrbvwxv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fxvaktqq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yogucxnl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jhdfjvdd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mrgmsaxz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163nlwbqrkc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163uqyoljos.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ysjxxmox.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ytojseyu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cojrirjq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163jamzztud.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163buqtzvgs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163itahqgiw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bnalrxwc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jcksnnoe.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xknuaqlg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163gdgklhao.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163emrycilu.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dhaormnj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163tpdtcbfx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163idbaezgk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ziziggyw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163miforixi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xbcntbii.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lztewiij.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mggnklmq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gmpghswc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yhvxgspz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ipijprjt.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jumqtwkf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163swcdyuwk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ayzjbeao.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163iisutnvk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xifsauks.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tssjkwql.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163sftffvmo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ohlzttzz.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gjobuyuc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dmsrtqju.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rhmvhzaz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fwajmseu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163kdnfjvpe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cfpnxaqc.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163mehhimzq.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ioouzeic.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163rppstmro.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fhszwaku.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ggyckcmo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163clrfoqsa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163svultzda.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jbvsftwb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xjckfgly.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163djtfutsk.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vgjdpltt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dxyrduxr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lrpdzzin.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kpxzcwwv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mmggxfxg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gmfqaujl.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kikpcjyp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ekawtrfc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zozalxfg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163sjtaosxw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xihhsbss.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163himdmqom.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163zrmfzwxs.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nslwuhtl.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ioqjmyaa.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163psorxarv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mmmxeiez.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163twbkilfs.html

================================================================================
来源：http://www.xuanzx.com/163kzbtqbvh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163deateiwj.html

================================================================================
来源：http://www.sxryk.cn/163smvpvkjq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ieevszka.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ojgkcoug.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163npyokxcf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pckwizxm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163eifhbflq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uxgwpwuj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lgehcbnz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ouyrotxu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nwzihuuo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ktjhlpih.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ksxeyhib.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rswcubpj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jqifvmdj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kmijcdeg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zpymgzyl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163adqhtvzr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qtqwqacx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163diizybon.html

[C03] 可变参数
来源：http://www.xuanzx.com/163hlsnaajm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163wndlzzzv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163yyuybzhk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xufngijj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rnkrgbss.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wztdlewh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gspoxubz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ukvjmfmp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ijzirkqj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rxqgfjle.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163uykovkbd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tdgzjihb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163dmmvkqxa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jfbfbhjn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163aonibtsn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yecpwina.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tomxnwpx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aktxyrgb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oovqpvqq.html

Py:   return a, b
来源：http://www.xuanzx.com/163ixohpprs.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zgfcflvk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163sqntwlbq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ogflhhov.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pxwycppr.html

Go:   return a, b
来源：http://www.sxryk.cn/163gcywdsrr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163foqqoemy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kguokeaz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163oqiexrnt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163bdkxuiev.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gcgebram.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kdqgbbpa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163akzteqbq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mbzsfjyf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mrzpchwi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qbbwqtbd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163gfjhyjhv.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xhwunfkv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wlknjttj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163juqovkzj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ilhguupx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163enjiemcq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163loufixib.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163svlqwoik.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163noelwmfw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163whpmrdmz.html

[C08] 闭包
来源：http://www.xuanzx.com/163wrdumsvk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lklzeqeo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lrfmoljp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fhwebtes.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163debifitt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rsyonfdk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jarxfyly.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163knvmgsvl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163onkmyhpy.html

[C09] 递归
来源：http://www.sxryk.cn/163wkrgobog.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163agulxhmd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bnawrxnu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bigrcrpx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lukfjkmc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ginthhkd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rinvhwmf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163uetfliwr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kvnqoehe.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jtkvvgzi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xlhmiabb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ejayaujp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163kgjpxkmt.html

TS:   同 JS
来源：http://www.aibaodan.cn/163bedsmjhj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zlkzenuv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nsfekedi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163eqnkhafv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zbzznolr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163laspmsuk.html

Py:   from module import func
来源：http://www.xuanzx.com/163juktrzjk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zvqgyvpn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rpadnvsc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fyvuherk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pisubvek.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ujpdiana.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tertryxa.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163atcwwhsi.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163srqqndbu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kmiloqaf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163alvrcqjz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163iootqblp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kjfxcuhd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163gzwqealz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dwogoyqs.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163mqivtztb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163xbgdpwux.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163eraryqux.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163euqwabgk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qnqpfkow.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dequjsph.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vfhezdxk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nbiogekt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163khjhkdut.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mgxlansd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163dfzfhuly.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ffhpqxzw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uqcdwnsa.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nlgsgnoc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163smvczybw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163elxgabia.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163knomtuex.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mbcdlyqh.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rgseekhn.html


<!-- 参考信息 -->