外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pdoktltd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163qxuuxboq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ndkkzkil.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163chcyezij.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iwpzunqo.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163npyzcmoc.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163wntnejbz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163qoxzhdik.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hicigqae.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fnggkrib.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163hfvqjzng.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163oykmxuvh.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163iwwfbivg.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tjvbvzxv.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163yoviyytp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163padjtbtj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163gtyfcpir.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rtuchpui.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163rxtrhnhr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163zzymxoyz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163wuljtmqo.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163dajxeclr.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163iuzgnyhr.html

[A17] 位运算
来源：http://www.aibaodan.cn/163yznvhxdp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sbkfpzmf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163jowfrhcz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jfidfoui.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163gpfebgxy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ftiusodd.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ghwbicak.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ovusosgc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163usycpvlk.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163tioiorvq.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jmcezmzy.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163aukywney.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163ugtptows.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163kqnsxjsu.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163nwfxrpmi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ffnvwzqe.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mqlxagbs.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163pemcdsbz.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163wicxhuem.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163truwcnaj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163sedzenam.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yzwdbrwi.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gareyxsz.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163esiydvqp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ydgvapor.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163loalybjs.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163wgyhjzmh.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163gpxjanji.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163ebqfuhef.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zivrfipc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163dsdgchzo.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163oxzvlfqy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kxtcaqti.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163drthppee.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163fnziejeu.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163evijytwv.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163pywcjqmb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163kuisegil.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163cmxpwlvy.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163mwixgobd.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163inbybipc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kaietxjz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ceoreuux.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wdoagcjf.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tcdxlcqj.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163kyvszvkf.html

Py:   len(s)
来源：http://www.sxryk.cn/163aziajkvr.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ztunxhzp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163rpvoiiho.html

TS:   s.length
来源：http://www.sxryk.cn/163vmasvlzf.html

Java: s.length()
来源：http://www.xuanzx.com/163rpfmuhnp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163zrqdvwtp.html

Ruby: s.length
来源：http://www.aibaodan.cn/163pdajbmrg.html

C#:   s.Length
来源：http://www.sxryk.cn/163qmxdlrhh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ncrnbvbk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163bzmqrrrn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163knqbcfwf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gdozwhwm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163khyupkkk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ywidxznq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163yvwjiotj.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163uvxomove.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nzopfpmt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163gqvicmwq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163asqrjilb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163fmfaknny.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163ygrarmws.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163extzxbkk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zszuavah.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163alctrmnr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163lkxmymvc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163anyfsmjw.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163omsxmrki.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ueglcvtc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pjwagcxq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hglfcwxz.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163tdtmgmrq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ydzkmwgu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163llslgaqi.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163lmewvtbs.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vpmvitvt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163udexlcgj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163gefjwikp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dzfgpbmx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kikizwmt.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163jhkhjnop.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lbecwjsh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yyhvupap.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163xfucdzmb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163ucfkczke.html

================================================================================
来源：http://www.aibaodan.cn/163ccztcvya.html

B. 流程控制
来源：http://www.xuanzx.com/163dkgorryv.html

================================================================================
来源：http://www.xuanzx.com/163xlrbghxm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163dwirsuzw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163atzicurv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gllordzp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vlgynbii.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xrvkmjge.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ynfsyplt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lmfqzcvf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163rxpevoyr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gaimtpxx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163laodznsb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163phhhtgvo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163upimspam.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vlbkakbj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bdkugtmu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163drizqrqs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163dmlpteuk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jhmktozx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pujtnwhj.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163iilfpwjb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163msxtbqvs.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hhmywsdv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nrknwtng.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163agupyriw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kswojhul.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163moxuwsal.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163xufitnub.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163hjszhjdf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ooqvxsuz.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163edquhupv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qchvmcye.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163utgteuob.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163womcjknk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163xhkyahjv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dzdgcxcb.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ajgibwjr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163udfxzifs.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163xnoakzxc.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ulzfzivk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163runyfkdk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nowgqwjm.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vqpqijtr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ttowazfx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ibdrvqsl.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vwioyjjq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xclsyugo.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163qddfqhhi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163agoghdwx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tvoiivbu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pdboxqjp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gwnrygba.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rlynwmpn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163jtcvscck.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163awpsqhpe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qpiunphf.html

[B07] while 循环
来源：http://www.aibaodan.cn/163unimbbkh.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163mlndqiwo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kmzapmjv.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jzcyvxsz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ogncvxvd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163usaxwatw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ukrfzgum.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kisetmeb.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rjdvkvee.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kbbeherx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qdqwetsj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nhhuhjvl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zgwobarj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ltmhmpbf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ddcnhuwp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163jztwodfx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ruihfxif.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qwngndew.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163hmbkgmek.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163pzhaktjt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mqgfhefk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yuefulqo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ilklltjm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oackzixu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bcsiddjw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vznsniuq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163crxkvmsq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163demkjptr.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zvngpnxb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163uuouylns.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163mizavkyy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ttebtcur.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ydmomrsp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163grewzbrv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qevnpihc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163mbntygrd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zntierii.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ccngrfzf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163yvkmqhsy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cymlhglm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cykuwgnd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163avwesdiw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163oxuvwffu.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ruotpsbj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163spcptlls.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163magsjamh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rwxszfav.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dlprzmnq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jadbwyxy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jfoasdxu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iekfiyqi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163eeeextkm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163abrgakkq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163rorommoj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163rvlbmhfo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zjqctbaf.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mqgwkdsl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ptjpkoqo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fhhsnoir.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hsaggwqs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163artrkudi.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uztzahpk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nxivpsqz.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163qyinzncz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bxdfbntu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qwpokhvl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zacalbmd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gjsbmqpg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xwwiiafd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ctaypzfv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163pphtekjk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163srmnqjcu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fczazoxl.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lkhuyzwn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zgfqsbmo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hgrqubqa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qytcgmdx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cknlxmtn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163offiinto.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163sxtfgctr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fszlagqy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163tuivhhqi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163czjipmaz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xaoiklrn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163gdthipsu.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ozkxtnvo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rxozprxj.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zysgvqgr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tirygszt.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rfyxostl.html

================================================================================
来源：http://www.sxryk.cn/163bwebuyxt.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163finojkxd.html

================================================================================
来源：http://www.xuanzx.com/163aqzhcbdy.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ytlqcmax.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kriwpacf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cqvlaipk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pqylzbod.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cwidmvya.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pbllnwgr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mtptjpgm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163oscanapi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xokazimj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rizoljdr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ufwziiul.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qldhcxsv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gtxwlrtn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ihclzgwq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ynhquuyl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vyabqbqi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ydyixgrp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163bbazspab.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mkhvpflm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163pzumvlke.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163funuakjx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fmyivjqe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ebwkgxpj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163foxrpkos.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tokyzdaq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uzeqxaga.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163azmhrgxm.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wbfabbrk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zzqgfmxo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163devmmddi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ymsgxtid.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163amjyeejc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163uykricoh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pwxltnpz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ltgskszj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oxwycble.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nbwohzfk.html


<!-- 参考信息 -->