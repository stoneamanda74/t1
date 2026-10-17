外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163mhbeubnc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163xriwzcnn.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ovhaibpy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163rcskolza.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sqrbwkrj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163cmxvqspi.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163kjjpvjod.html

[A17] 位运算
来源：http://www.xuanzx.com/163smiciifn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163yjazoqky.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163tpsvfuxb.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hvcinjtf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ajrcfnjb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hzphiucf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gthxaayg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hvnttzls.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oxpgkbsu.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163mdeaiyve.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163brkkhuma.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163qphgdayc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ncueqjvz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163uzxfnndp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163hpoaieux.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163edkpuynj.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163fecuyhpm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163hzoddxxi.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163zwwtxrpg.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163imsxywfp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ttsdszwa.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163kpzwlqpf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hmjhvrmf.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ecnerqmb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163ghpxoqnv.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163qvdqnpmj.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pockfynd.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163vchzehfc.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163tsrhcola.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163inmgpuwm.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ocywiiwk.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163fbvzshkr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163nuueuonl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163cyrawywj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ospqruqu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163lnohlyxi.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163nfmwicim.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163mxxpylxa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zcdooqtv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163zwunprek.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163aksmubua.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cojmockj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kvzznksn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qzczvith.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163nqnokpvx.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163bdhsiagr.html

Py:   len(s)
来源：http://www.sxryk.cn/163xaudaltf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163xqmjjyij.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163litgglaw.html

TS:   s.length
来源：http://www.xuanzx.com/163iibtqnme.html

Java: s.length()
来源：http://www.sxryk.cn/163ulyfbilz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163nvlgkewe.html

Ruby: s.length
来源：http://www.aibaodan.cn/163gxhgzqjr.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kocnksdn.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163fhyufxws.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mhsmmozv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163azqywfhx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lmjdzdcz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163inradkjs.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163olbyouoq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163cibslrqw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ktwacwgl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163oownjqar.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163gzabhjxy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163mpcnbkcs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163pgxwhsxb.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163jxscivbh.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163hejnhywg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bijgkvgc.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163aaqvbayr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ifcjmirb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163oxohvgdd.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163judppxav.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163tehmmlis.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vtrmdidh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gdqlrrsr.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wuenrvgh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163bnmcqliv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163qyyjibje.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163eceipwoh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163pheegjtk.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163qcnryggt.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gmitusyz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163tkblnnue.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xrnmsxdl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jtngedzm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jvqjqigl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163pmfsrulk.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163sxqxobgc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163glgevfwe.html

================================================================================
来源：http://www.aibaodan.cn/163zgcegzwd.html

B. 流程控制
来源：http://www.aibaodan.cn/163ntqaitmf.html

================================================================================
来源：http://www.sxryk.cn/163jpxlpywb.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zzqdynhr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163nadjigzl.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ghbaqbmk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vkuknjjw.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lgsdtrov.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163klrjckdm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163mfqonkwf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163xkzzvsss.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163fwjxzecw.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163xomcszah.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dwzvnvqt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bbgnpuai.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hogvuxmi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uzcxgdna.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xzkqbggv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163yhrhgkoq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rdrkerqg.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163afachxdu.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163htjbxyty.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vlfvofrt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163doktkqfr.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fqvplyva.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163imozwchh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163azwtmwsx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163eyspdqhs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163fzvtqrxy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163qahuotwp.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wkivbmfe.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163enzomwoe.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163iffrclut.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pvlcywtk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hdkpmcvq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tcroywew.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163bmsbaaqr.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163saesblhd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163trxzborg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163uekfyglb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ptkqpucg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fjhnlitl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hpvrxlol.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vtrdzftr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hrsmpkfp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163axwwqnwu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ovvtynfd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tcarxsme.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163baovvcyy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wvnfrjnw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163tueyeivg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ocbjtitn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mboyjmuq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163iuyzbjhh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163owdncxbb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163rxaoalpi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163pbwrlnbk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163mihkykrf.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vdzxlvyp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ydzrgiey.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lifkczyy.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iioqjslo.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xqepmrjf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163edckwuvb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wupytleb.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163azctdtpm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fqbvjhjj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vtjyxbgd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xuvjnbta.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xwpuzptf.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163odksmkve.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kgfeaiuu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qycgmruf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vkqlfaej.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dmsawzbw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163cskhmkdc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tzcwhyhk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163esdfrbad.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163edukayzn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163igfxrkoa.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vvsiosus.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zmypcknp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bgypskge.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uwudnefq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163eqfdmimd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163yxixeeau.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163joweozda.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ylbzcago.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zfqzpawy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163yqmirtyt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zwnrvzdv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jblzaxge.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ghvfnjtf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sdjsukaf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163eoqqjxle.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rwsuxkex.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ytpmhnkd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wwtdbvco.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163iwuqlzgu.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163aywwejkg.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163szysmhys.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163acatmjbl.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bkqhqyvp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163bpoylgnh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kostzqtu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vkglfblq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vdswtbvb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163swbnzxkw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vkdxjmxo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163hnmjhkge.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ftuqycyr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wpnflabo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tetygcve.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163sehxetpm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wxxpgvpr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wodxotuh.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163atnvwpir.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163kbwjuumi.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qmsxkpbg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163bleqnlmi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lsqridwh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163euwwcctj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ccmssjfe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uxmnkpns.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ybabofzm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163gzaemykg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bvlpvauk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cvjwoyjt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163aehtrgcl.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163emmnqcmy.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163tcrkvfyi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163rymieedn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163shkkvggy.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jvsnuvdr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163comzakbu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163arwseuum.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163eaqjrpbs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163bqqzsppq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fxaxfvvx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ktmturyg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163gwqnpcxu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cfnulswn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ltigbjxu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163alcdhymy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vmhiforu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wukgbbwd.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qhagwmhi.html

================================================================================
来源：http://www.xuanzx.com/163tebgcnqz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kqqcreso.html

================================================================================
来源：http://www.sxryk.cn/163pfamwlft.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163teyoxgqs.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jziwiqtb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ygzaskzf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xqcthhac.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cfysgtqh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qhbyzoqc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mjrwujhy.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ecnqllee.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uymikpjj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tdlskufu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yviroove.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xckuhmjr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bpirfjah.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163szhcabpj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163sbjpjwwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qymcfsss.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163tosqphop.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qdaobfva.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163czjapjhx.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163exnhxtnh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rqtbkvoi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vtkqwzwc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nkzbsoha.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dduwoqhz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163wfcocdej.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ieqshaih.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hlunapbu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163daelphzk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163igfmabzf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rzxaljqm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eybhddjm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163omypijwb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hjgvwixz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163huwakgkv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lcrqixql.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vqvqqjng.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vugrkirw.html

Py:   return a, b
来源：http://www.aibaodan.cn/163eebouujf.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163madqigzz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163shfqywbe.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163akyuytee.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ulltrhxd.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hqciceyl.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zhplgzvp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cicmvhia.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jbryuijf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hojmfodc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bgzydpjx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mbaboixj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rchwxvqy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hkyxjula.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xwtcrqaj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gyejautp.html


<!-- 参考信息 -->