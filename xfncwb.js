外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xtothqcg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hlxrfhta.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vzzrhtuo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163clvoagrb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oicyuoup.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mjxgoupc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tidzzvew.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zctajocs.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163elbxpfvl.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163kdclnpzt.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163wvfxdfsq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163itporhlq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163rejkaxdq.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163onlewtnx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ysjnooez.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163dxxwooop.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163wzucnoll.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163fsdenkjj.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wleqecun.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163zrqsfmxf.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zafwjpak.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dlehiugp.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163exxyelwk.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163fuhyvsql.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163wvqetqdd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163zfteygyk.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163txhrwfmc.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163kzinnxhx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qbiohort.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fojnrkok.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163hxyhndpt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163fhwmbqta.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163baavyyjr.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163peiwwimx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jodohyor.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163cgcpyulk.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163umeauqrl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163hnpbpskd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wovdvcyc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163rxrfugqp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163phmfhsbu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oxyuccps.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bgnsaqqa.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163xremdtig.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pwnjioio.html

Py:   len(s)
来源：http://www.aibaodan.cn/163abwujhsj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163oyouxcyk.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163ifuadyfx.html

TS:   s.length
来源：http://www.aibaodan.cn/163wzsqtvxr.html

Java: s.length()
来源：http://www.xuanzx.com/163tblpmcwa.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163prkbbffn.html

Ruby: s.length
来源：http://www.xuanzx.com/163mnqorcbk.html

C#:   s.Length
来源：http://www.sxryk.cn/163czqoqlys.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163swklzhha.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ydreonqh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163lzamozbh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hkddfous.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vdnqbmhv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163oxsqnxwx.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wfiwyukg.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fedukint.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163zczslczm.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163djvsjbvs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163frgukofg.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163guiaumnx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163rmmfciga.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ewxyjctl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gfazvzqj.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163pmbizrgz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hbsarbin.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163qrncgkqp.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163yoyhetzx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163bxzjpycs.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163fdjhvjqh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xyvgpcbo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163murhmpzp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163itoxlnjg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163gsrckmgu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163fvohwkvg.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163oqqhnjxe.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gvjzvvfs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163htwadzix.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163yhirbkmj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163kgnwubej.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qifyvfxu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163htntedzb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163cmlhromw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ovrbwwvk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163gkryljeh.html

================================================================================
来源：http://www.xuanzx.com/163wggtuscf.html

B. 流程控制
来源：http://www.sxryk.cn/163xpiwpdqi.html

================================================================================
来源：http://www.sxryk.cn/163eavzmsbp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163nhzbsypx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163nljfiifv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163bdgbylxd.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iqbfmmsh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wlkbupye.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163upldwkcs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163oxwlrzos.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163afbhjqeq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kikdxpyy.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nqeomtda.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bdxvmzln.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163oswqjqkb.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ovgvzuij.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mcbwgvbd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eqenqffy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163oxrocose.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163iuqqogkp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163trgxuqdc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ifmicfic.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bezqxkwo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163yvxtvpfc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gybbtwhz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163aebnhsrf.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mhphoeaa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163zowkgvlj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nrzynhtt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zabqkiio.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hwgxhrza.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ltfgfrbe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rizaituu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ozkuvlhm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kqqyrgyg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163lwrdofen.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gaxyifpk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163vaammevl.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163hmawwclw.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ovqibzlv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fbcnrwch.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163seyojiob.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ovjuybug.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163crmxnawh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163cjbqqxed.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163zkgbvetc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ansdgzbv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wbmwsrix.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pblwnalk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163oadxdich.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163rgtfyecv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163roxfsjak.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jgfshhix.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163pcjqiyqz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hwncrbty.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ehruthfd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163waksurqz.html

[B07] while 循环
来源：http://www.xuanzx.com/163jicsyxik.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163lanmxpsf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163mvdmxjfe.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bjzcxmud.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qidahsgn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rcpuoomt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zyosglro.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ygzsvuhe.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jqkjyblr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qlscsnyq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163dosjaoqa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163yjgnjahi.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lsmagkul.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jyciooqy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aptzknuv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163osxdlvlx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qvksnryo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihzfvcsp.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qwpvzoks.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lydxiohf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qrcsfrto.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wuntjtmi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sewwekkj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nexrypoj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163czzjqlha.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ajmeiluj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rovnjdqg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163iqieslqt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163akwqmrsf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qtpjmwdu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163radasrai.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ljmrlocd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nasvkphz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163satrfrhb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163upblvizl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163hqhwdcyc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vzmyohvt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aabqbwhj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ufqiskbc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ogdjjpyw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fikopaxf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163wrnwjfej.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pjghgpak.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ijhrqkig.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qafufxlr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163qddioali.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cvrsrdyw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163estbskrv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pbapacuw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ufdvmtzd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wluijzbr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gkljrwwf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wzainsnx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pxftyyfy.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rvxtyzjq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tyfrtvdk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tghsbkbt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tvfcjsrz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fzmywmuj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163piopcrxg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163npabrzac.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kfvhocpq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vvwacysh.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yeryhpgw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wdufffav.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163laxlnqnm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uhttqsvx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ttpdxoty.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163wsjzvxvk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163oukmxbdt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wjkcujdy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ijlafrqn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jahryknp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lvmuylnk.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163eizcsfzu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mjzrbnbb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163abvxpjqq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163eyqimugg.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163iyncvxcb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ouvvdxcx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zdsoeerx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163drqepcjj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xrhgngwq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wgwdsxvm.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163icgmlyza.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163jdwjmddi.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qyhkgnbz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qpyuakad.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163pukvhmao.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dhsileef.html

================================================================================
来源：http://www.sxryk.cn/163brubrgsc.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ahwlgwbn.html

================================================================================
来源：http://www.aibaodan.cn/163pdjfoqfy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bfrhglje.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163neihsjoi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uinzuiwg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163awqirimq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ffxjtvlz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vcbugskl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163lyaxivyd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163crjjkdts.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163czidulcz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163obvkjprb.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dfhozcai.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mzfgjjml.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pfyflykg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cweidouw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163clzrtsop.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ftaqtsfh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vadkkudl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163iakgedzf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163idnkkvxv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163khhrfxwl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cvqinuxd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163azjtbsax.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bifoqnmh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xbifxfpf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163iphnssjy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163nugcakof.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hiypkcgk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dqhrpjka.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bymczaup.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163cjrgdzvi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ckqyfeon.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dcdvzipr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163uoiciwzk.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163azuwyqis.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uifbztyj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sbolxtjg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hezkzjkz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wogvhspl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163lxryduhk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zodjzncg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163hsykovoz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163korurspw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163pffofdtn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163evhllgny.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163bhfxcbps.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163etxlxacf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hjlrefrv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ihmlymzu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xtyctwxd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163utwcound.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163okiktjxz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163itwabrbf.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163aopafdgf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163udroqzhc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163eckdaprl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qjhdscox.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bodkclcy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163okhpigbc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163poapnrwk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vjmxgmzi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163julgjslm.html


<!-- 参考信息 -->