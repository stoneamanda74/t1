外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163wkhuqcot.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kiqfuqqw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163wtzzpevd.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163jthadfzb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163iokwbwah.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163mkfpbmoa.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163xogfqszz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163aewtwbkz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163qxrpkkru.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163xlhoswlp.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xrmytgbd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163ujlptpoe.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163kguafjsa.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163amoiyylt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163vvqkcrek.html

[A17] 位运算
来源：http://www.sxryk.cn/163knwdlqap.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ddhcejke.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163wlkwjwjg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163lxxaqigk.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163yikncwqn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163btwewixq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163tokpyaby.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wzwtcixr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163psxiappa.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163hnylliwd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163spjlmzoc.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163clcesxsu.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163doaycprw.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ppikhqtn.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163sbceqkrj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163tsojggeh.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163utnaxsfy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163lgiylhqr.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163gbxxpvmc.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163lwzdmokk.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163puwawlqx.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163hamhjidg.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163opclespr.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163edwglsnd.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163xbmyvvay.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163sdjzdbnp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ldvegahz.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163fahyzxnn.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hkxtkfxm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163zrpeikdw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163loqhzbuc.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163lorxeguz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163kwphvxgz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163udvdrafp.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163xxpbudzw.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163ctvitegc.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163awzcunfb.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163xskqjmwf.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zncmaaek.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163cfxnrrjc.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163swngzcnh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vjjjrrvb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zflocyuk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zjejhhhc.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163qkwyhhkk.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tvbiiuir.html

Py:   len(s)
来源：http://www.sxryk.cn/163ehquvjit.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163mjkofbsp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163svhlbmdl.html

TS:   s.length
来源：http://www.sxryk.cn/163keikjkco.html

Java: s.length()
来源：http://www.sxryk.cn/163agbswciv.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zklccgps.html

Ruby: s.length
来源：http://www.aibaodan.cn/163nuidrhlw.html

C#:   s.Length
来源：http://www.sxryk.cn/163obxppyjq.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163dltixesw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163grmcbwga.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163vlegsirj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pdqkvpiq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bsgjztsy.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gpkvkgiv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163kpqokpux.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ppxrevlh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jfwktfhl.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163dzajylrm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163sineajom.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dlsduioj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163euxowcsn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vmmjxvnc.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163pioubzzv.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163qurjblrv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163antwtxev.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163hgbfmtwf.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163khcuiipl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163mhfslmlg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163kmaenxbn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ldxvyeah.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hsipupnm.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163phglzdcn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163tucgknqn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163vstlyadq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163fcifvzka.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163fekmgrjz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163lrikxphc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163nbcpbyjl.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163arcroise.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163szlchtvt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ovrqktbu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163kfparjar.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163kcehtoti.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163iagioyhq.html

================================================================================
来源：http://www.sxryk.cn/163spcxvyxz.html

B. 流程控制
来源：http://www.sxryk.cn/163ezffzxqm.html

================================================================================
来源：http://www.aibaodan.cn/163mdxdhwlf.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163edlxzycr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163azmvhklb.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163jfupfoun.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163dqrogdvg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kwusvhhr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bdkgsmtn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mbbafbkq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163giqizufa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163aqybbgme.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163qcpqkxlk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vyjrkedm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163odrdlzio.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pxcmdrqb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163uidqtjxs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fqmiadta.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163uahybocb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163izubyqvn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hzaxhvpw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ivxcioik.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163tcrbhvrl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jyppofss.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ygvdklfv.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163uqxikbuc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kttuzope.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163yvtkpukc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lzmnzeyw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163jnrifdxi.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163qiivmplr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ecbcddod.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163myeovxib.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163rbrjxhea.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163txfizuvp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xjecpqaj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163fxsvbptv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163pejcjodb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163pktrwqse.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163vnwpsicx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ricnxnod.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163sniluhev.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ktyrsznp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163situcuri.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163cxyyeefr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163hencengw.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163krhwhrzi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tzjyxroo.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pegodlbf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163tadrlgjl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163fpfvxklg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163poxiltsm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wtzffval.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mkhyxgni.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163sdpyualw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fjiveggv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bybupvnm.html

[B07] while 循环
来源：http://www.xuanzx.com/163jdkqxwud.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rbeeykqh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mqnrvhye.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ttsceaez.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xpjltzfm.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hvojbyoa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163bwiqbczc.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mdfhrhoq.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fcwxmagl.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163opeshlbm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rmtbrwpt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tmyrvwuz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sdjrcoid.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pmctdzdw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zmaslbwd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ixqtlwtl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tceoeuos.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hbltkviq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163toxqgbee.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lwyhermj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xcfxkqcv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bptrkbif.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yajtbxif.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pvehymmg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wrigijwz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ryqtymur.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nsyiyntq.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163phdpazhk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pjqksddw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tosgtowf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163rhuuobkv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163tmdqchlo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dpcbqyfd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163dnurwlml.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nqprbxnm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163xaekulks.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vavsbcqh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163aexkwskw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163icwlnvdo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163arxoompj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tcagluqa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163jbwujlgv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mfjebooq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lepzogcr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163unrpaycr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163exwcyodx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163neetpvum.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163dulilzjv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ufcflzzd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yxrlqwul.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ldzvqbyi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zteejdih.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iqhswenn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rkwlvoka.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163crnzbcdx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tzgjfmde.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bcxmwlbn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163evtfhxfq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bjfdpbsg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163abaaturi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163actdlbgh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163hstnxetd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nzeejneb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wbqduixm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163lqksztfq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163sbkmiiwr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bvwngjmx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ulllxoix.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163rhcjuaqn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163zmbxersu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vhdpqjdh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163xumkzgam.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qexiizli.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163emyhdahu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jblnptwk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jvaldave.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ixhhttho.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kuvhzbqo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163tszbhcbh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163loqoozpe.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163oshfpayq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wdaoxtyf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xkphancz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nxkofach.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kcqwcoqy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ztfjquof.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wpmbrxww.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vofflrdq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xetrppyq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bwpnbwly.html

================================================================================
来源：http://www.sxryk.cn/163ahusbgpa.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vfbpykla.html

================================================================================
来源：http://www.sxryk.cn/163patgysyi.html

[C01] 定义函数
来源：http://www.xuanzx.com/163atfkcsvm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qmgibtff.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qdzmgslw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kvmvuxtj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zvqqmlon.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wdbvmkqr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ttrxjjby.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rucibrdr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tzujndsk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nhoooiim.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nfvssrjk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vhxhzhlt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kvaazyeh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lajpxmcv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hdjmvlmy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vhqvocdc.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163icekozad.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yrtdxzpk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uomtqspu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nraxonci.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jleqjjgn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lscdcwfw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dqllkyel.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cihnnxuc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bitikeop.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jflhmzcw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tpzaronz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gijdpbcc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163klmxblpu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ejxhcwze.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mrbgxirn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qrpdguzl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163leafnxhp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163uyenrxff.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163aklpoyao.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cnhjfezw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ggrbdhtp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163piodjlnb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163xstxibrt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xhlmaxis.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qidyiynq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lpaumskp.html

Go:   return a, b
来源：http://www.xuanzx.com/163aafktoty.html

Ruby: return a, b
来源：http://www.xuanzx.com/163juwvjkcp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163kpyndmjn.html


<!-- 参考信息 -->