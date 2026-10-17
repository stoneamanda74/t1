外链999!wailian999！

C#:   s.Length
来源：http://www.sxryk.cn/163pdikglld.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163kezxvhap.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163vvpqrfrc.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163tktljwpj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jtajdflw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vtwwyrhq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nwtvcxud.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163cngvcgwf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163xcvimxzj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ehnmmhtk.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163yosbjojj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163tgnqjfjg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qtkzvuxj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wadeirbx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163btmmefsd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ojqtldhk.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gkzcvnza.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163npxmfduj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jzymjzkg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xuoqwygn.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xexjiwvy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163sffxpjbg.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163curwrwpi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163klylwvke.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163scdquyuj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wkfpcoha.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yboldbvy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163gwesxxaq.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163cfbywgqi.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163mouwnvez.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163eezkkazp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163jopfture.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zoxkeypm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bvvohwwe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yamxkqft.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163vbefhich.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vumoqptx.html

================================================================================
来源：http://www.xuanzx.com/163bckftepv.html

B. 流程控制
来源：http://www.aibaodan.cn/163udkupoad.html

================================================================================
来源：http://www.sxryk.cn/163bomsynda.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qurlxgmj.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163eetshoxe.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dwqkvplt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kolfusmc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rbxcwyrd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qsqiyyez.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163tnylfmoi.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163cyhcobhh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gxjbrftg.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163nqotbstf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163crpehvcb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hbfzxlud.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163prljatvx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163onmgsjnt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dztpgqcz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ekrggcmg.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163gymupkbn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yktyrfwk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nogkdhdh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hiscmzom.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163wonlsupg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fyasiuxo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tyztebdo.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163uvklpwyj.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163khfoideu.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163ulqgvsvm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163oeptfexf.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mrgpxjnf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163fbmlxlpp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jxfvtqir.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kahvxcch.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163glpgwyvf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ipkigipz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163crdhgoox.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ybafbidw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163filiokgy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163znqcmrhu.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163giiybqgz.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163luybreyz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zzmexhsu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163shxderwk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xcpfxoqc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kdssvhgs.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ezkrlsyr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rgrbiiaf.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vuwvssrj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163uujxveil.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jyehlahj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wgwcuuxc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kdipzrkc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tfpwbvxa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163mscvwjah.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163bfydpheb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163xwqlhadn.html

[B07] while 循环
来源：http://www.sxryk.cn/163evkiulmd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163jlkfpseg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163crdvyttt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pmyfayns.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qiytwucm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rsfwgrwk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xpvkdijz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163amvsepir.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ghglkdyi.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kgicqrfs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163igvygbsy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163pvprjrec.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sskyydpd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163etablesa.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163frlnocbr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163goilctvm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163aaapaoxf.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mzosqyin.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163otoapqqa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xsjesbbp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ezzurgyp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dszrbvzi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gbgkjatb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ypzqbjtu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163aecbdfjj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163sscasket.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nssiezos.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lvdrawcw.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163urxbwnpq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rqskxhwg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rvusxzak.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lyolthee.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163zpyghpzr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wznunoan.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tkwbvaso.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hwzcdbyy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rmgotgox.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fcwdekwa.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163synfbdli.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163roeuszvz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jzdnznbx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jawrirjn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ytjccgte.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163smahmuzq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163pupvyviq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hseqzhtj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bfqimayu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163barbpsua.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cftimdsj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fjwzyquy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dqwqadnz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163diibisga.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163idgfruvp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163guwnkfhg.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163esvmuwek.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163liaghzzt.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163hcpchrvw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zgsznpcx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cvnuaone.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bbszrwyl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163awbljioo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163osltnrso.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lkxnoimf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rpocknbw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163oomcjgqo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dqynlkij.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163otkfghrf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gsavyxjg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163scdjjopg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163eubvlynq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163szfwaywd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jxqhpyoo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163zxuicqzt.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163awzjvjzc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kbwlvaag.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163udnsaxyr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ohxzwmde.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dhxsuuhh.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163mxbuxkft.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zmvxyhdo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kobvqarz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163denelhqv.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163twpfekmj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163yhhvbhde.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ksrhzgqa.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xrftbuyt.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iargmggp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163wfsocyvj.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163orruihsc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163temfybtx.html

================================================================================
来源：http://www.sxryk.cn/163urlhhcxt.html

C. 函数与作用域
来源：http://www.sxryk.cn/163iotbxxwa.html

================================================================================
来源：http://www.xuanzx.com/163ljivuxav.html

[C01] 定义函数
来源：http://www.xuanzx.com/163akvbuneo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ktrpmcxq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dbqofiav.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xlrrlgqo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163drjmbqef.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163oicywmgg.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163igweemzx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163exewxhcq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163obctpvqx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163scpaufqq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wtcrklyy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bjlixkfr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rquwvkhq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dgdzbjsb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163eazcqpda.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wpwdvgkb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bpsegitt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163blhvokrg.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cdqyxmqg.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lcxfbxto.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nnvuregs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lbxgkpkg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xjhhbfic.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cufvsitd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rpptuyqw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gjuiqdyj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bkwawciz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nhjzjjqu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qhwxromz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163govdsqsk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oiiuflxv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163lgjqjjbm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vzucxftu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163lmpqyzod.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163efqlwwax.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kdtztwdm.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163sddusywn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163sjfcxlql.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163asjttyfc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zvhgncdv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163snmxgbto.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163latxrnpf.html

Go:   return a, b
来源：http://www.sxryk.cn/163puitsckv.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qybvoaih.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wbeaaoci.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163sinipezw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hhjordtp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rwahgcwq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fynqifiy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163gtdkazrz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mngzyxur.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163athfmagx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163usjhygbu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hdegwjkn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163eqonagpg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wyillpxa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mwnfolam.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xznkbhnq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163knwsezvn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yehomtne.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kontaqib.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xqxtrkar.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zugoxgqt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qlfkxuvd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ygeywvxr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ohpqqqij.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163alnodenr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lhqhjkzz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qczafssg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yzwgxzmd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163phjkbwlm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nvjmtfap.html

[C09] 递归
来源：http://www.sxryk.cn/163kdteeeqe.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gyyqbrha.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rqsqpssl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uabwppyo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kscurzhh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xnlpyoeb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ggyfcdrx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tyhvzqiy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dhjpwxtg.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tvzrxray.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163czwyyfsw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163csutxesj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zbvfudbe.html

TS:   同 JS
来源：http://www.xuanzx.com/163izadbzpa.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163oqwzazvb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lkuhpnex.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ouadejic.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hkwormrz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pxkikykv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163sotiyyxm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ywtwkmhj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wdlonnqj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163mgeydwff.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gvzipzyu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nptmyisq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hkpsovak.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zjisrimn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163oiogagdu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163knsjkqyh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163whnrcxao.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kesplqoy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bkfgpylv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fcttusdu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ttwgohfm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cyvrhoju.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163mtvfycfz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xqqrpqic.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jdjdnlpa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163atxcgixc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163uokqlwdo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cdpeizof.html


<!-- 参考信息 -->