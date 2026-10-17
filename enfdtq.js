外链999!wailian999！

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163bskocjdu.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163eshsslps.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163afxlbaue.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wzreffjz.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163mwsdwbaq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163soqflian.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163srpoiijq.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163wegjidhf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mcxtryzz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163onpkhkvs.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dpeteiqo.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163gsajofzd.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163pfhtylol.html

Py:   len(s)
来源：http://www.xuanzx.com/163movdhfjg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zcurgouo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163yxyriiim.html

TS:   s.length
来源：http://www.aibaodan.cn/163mvrylvbd.html

Java: s.length()
来源：http://www.xuanzx.com/163edaekyjo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163hrbflifh.html

Ruby: s.length
来源：http://www.xuanzx.com/163sztoaftc.html

C#:   s.Length
来源：http://www.aibaodan.cn/163cbyvutjl.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163csfugtkb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zdzrkyry.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kbprcxjl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vookxbkk.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dnlttawd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mweujbxq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ynnaesud.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wrrgtxmj.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163hmrrybng.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163yqkzhirt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163eihaousk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ngytbuhs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jgficizp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qanoyydu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163ouqectyv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163xaxgoooj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163reciqosm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163yubydaga.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163noiqoakw.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163jkdcbeqx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qwbntaxm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163cslpgskj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163nsdmqwml.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163jsxvsspk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mdpnwysy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163xstwasdw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163xzmnstcz.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ktwmmkvx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163btlpmuup.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vcmbwanx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ajxjrlnr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163pyxpuhrx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163trftswbf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163hscjcbmw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dqnhakpu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163igevgjzr.html

================================================================================
来源：http://www.sxryk.cn/163wtfoayjc.html

B. 流程控制
来源：http://www.aibaodan.cn/163lbradddr.html

================================================================================
来源：http://www.aibaodan.cn/163ngujyuum.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163rirwwpuz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163uwjknhef.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163owrynsjd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zqjkcaow.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nuxvvgov.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163betyncda.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163gqupxqzf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163mrzejysk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163npepwzly.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163qfmgtytz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xmtcwgql.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163xxsioqok.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rtpgrpvz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pgychpsu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vdgvjken.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kkewrypa.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ainhgngx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163majbheyp.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163skiuzidg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163fxhovzai.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vgcaqdlo.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163cisiruio.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gysudaec.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163wfufvvmr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163pvjamrfa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hgebencg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163hjmjmqup.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wqwfjvdt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dlejtcqz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ighqllcb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163bfmhbulz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xqjuywle.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wlcpnwgz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cmkehvhp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163owkgtzjy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xvbrrvzz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dsxmnmiq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jhklawqx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rbjokrso.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163yeodtpqw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ylhbnhvl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ngxqdcau.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163lhhygpou.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jnrqnwng.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rdadkbvy.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wbxslgkd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163mscmsmew.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163idpbovqy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fkuyngtk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163qoosvfzq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163sekxmnaq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ffxnbjtq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ulcjevzf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fgbaotwf.html

[B07] while 循环
来源：http://www.sxryk.cn/163tdpdczwb.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ytjmiysp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xutjuudx.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163daxswqsu.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ufopakrx.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fttojpwr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163oyujfzjm.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163nsqkoxop.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xwoojnta.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163wrqjpdpc.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hgyibqcv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mknjjimw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbgijywx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rgigzmyq.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iyiiokct.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163sywvbahm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yvxmpgfl.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ocfrkail.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163wclwgvih.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163asydzhkz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fjxswthu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wvnatjjm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oozexyrv.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hlmgzprx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163bmtostgv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163sgfbqaho.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sktfslsb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163begtdbcl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163cdtoodtr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163tligtvly.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tdbpexcs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163svqnxish.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163aecotahn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163gehkfmjv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163fftxgssb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dozsvlrv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ukiyfxzo.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qwxrumob.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pmmlvwqw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163olaidmiz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zyoulppa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rjtzbcyr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ljumyivh.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163wvylgpni.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qaygxbdg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kztsqpbg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163nohacuuy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163niyzpicz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163emvejtoo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nbsrcipo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qbkxwqkt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ellgryhx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jvevxgyk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xxozcufz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gurrxhjm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rlyfcqwc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xmzzkbpj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nyfopctb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rroyzjhr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163avkvgfca.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ocpndvrt.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163otwczseu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vhjxuxfv.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163qhiollva.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163trhmryhj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163orlnsnfa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nmpbugfx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tvjliemm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tfsauyqy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163jyswcxia.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rcvtauyo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jvuismwp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163nwmcwtlr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163oyubqrjj.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ttqtdzfv.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ydpcdfax.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kuzmjwwk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163mljjjogp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jlxmdmov.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cxlczjkf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pnroygey.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dvvqzjbr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pnvjwkeo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tluscsdy.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hiejanaz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nkeduzzh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ypgbfgpg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hiwkofbb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kuhdtewt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zfhzufbt.html

================================================================================
来源：http://www.aibaodan.cn/163mbawirxe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163guotrshc.html

================================================================================
来源：http://www.sxryk.cn/163hlsulvmd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qexolqpf.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vjvtejhq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ssuvnucw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163efqjkjum.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uczcbets.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nagzmscx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ighmrorn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163auyhjtoi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163szmiqlxt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163jhqauqdo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rmsuldns.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163zeiwvzfc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rcpacpsg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jnpzzbxf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163fcrkbdob.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fdvlzdaw.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xstrgbld.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jokvnuxy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zqugbbfc.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ocybvfvf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cvqpvczl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zwanuvxw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dyjyvkdd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pasqgrrx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gdzsqnoo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cnyybnxu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zhtaqpvj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jsunccid.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qgaeaawo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sucfbhxj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gfkoctce.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rojvbsko.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163cgddvaxr.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163flmyzzfg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qyrelnry.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rsecolvs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wtgptoha.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xbpakirs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gtpicksr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hgoamqlt.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hxiicrxq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163itcusxzp.html

Go:   return a, b
来源：http://www.xuanzx.com/163nhkathpc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vdhakcqd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hloxvxdi.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xxnmctuj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xnoymoib.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ckntyugp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pnttmuuf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163syldgjlc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163tuqbdaeg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jylbbgal.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zqxtvvyu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163houwijdb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163obmiuker.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dqdnhbjl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163citlyqpo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rbwjjyqj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jzjvpkhb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163niidqnxw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xpstyicp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qgtmvqut.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fdinarkj.html

[C08] 闭包
来源：http://www.sxryk.cn/163yucllmqf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163emnbbbvo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vpdqlpap.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163awmnifpx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uyxvkkuw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gsbuxaas.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fchhlkop.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kmxdlgun.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bzdicvwi.html

[C09] 递归
来源：http://www.sxryk.cn/163dvvjyxqf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163szdlovkk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wknfityb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vusyhbej.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mrdgqpyv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163rrxjltra.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163kpgnvmyb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sxvpjupm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163eocanyem.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163xdtjuvlp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zroiftzw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cgzuqtcp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hmljzgfl.html

TS:   同 JS
来源：http://www.xuanzx.com/163bcargmed.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mqaqhlna.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163irlieaab.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vfdvbhsw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163aagnyvwj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gcufznib.html

Py:   from module import func
来源：http://www.xuanzx.com/163yragfeob.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xexqlnuo.html


<!-- 参考信息 -->