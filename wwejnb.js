外链999!wailian999！

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dzavquom.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163darqvvhy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eqixotkz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163muwkdsmy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fwqrgpnf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nknlejet.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sodlcsqt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ntwbukkw.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ajluhczo.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163fusvlroj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163pflpttny.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fftrsira.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mgvffvpw.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wlplyucx.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dbryzvbk.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kokjkmyv.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163jhmxugso.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163mkfhexrs.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163lhoyssfv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ptltbatx.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163okadrqbo.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lehrwzwo.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163icsqfxxg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163spfdmxlw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163gpdgrdfo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163pciqsxzt.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163unjrvwzq.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163bsvyuymn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163nialznyn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163cxmcchqe.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ditzxgeu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ktjjkmqx.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163tknawnxk.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qvxzceaj.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ucbhnwpy.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163sumabhhv.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163btqsnadm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yqdmlhwj.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xdmgnvdj.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163pcvqgdon.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ctookhhc.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ynbghqmg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ghpwajnk.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163ecyynylq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rlgeubkn.html

Py:   len(s)
来源：http://www.sxryk.cn/163ptzejhpc.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163riwjvcbl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163sljazomj.html

TS:   s.length
来源：http://www.sxryk.cn/163kvlcpvqt.html

Java: s.length()
来源：http://www.aibaodan.cn/163ayasbbdx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ckciwphs.html

Ruby: s.length
来源：http://www.sxryk.cn/163gxqvjhsc.html

C#:   s.Length
来源：http://www.aibaodan.cn/163nlmhlzys.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rytjbeaq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163bjtudkoh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163drfutxwp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163diytfkoq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xytyqybz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ammptspr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163myqbutoz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zjzzligz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ohcbqkxf.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163ftlavfvr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163dohbdtbr.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163svpkoxet.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lndctgve.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jglkegts.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163sakgkkya.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163zlgzlrmw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163iltfipba.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163wdqfpruc.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163krspgzqf.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163vlrwwnqw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ttovbfhi.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cnmfowuf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qtgahwar.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hhgctzuu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qykiuaci.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163shyxiajj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wycrofbo.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163jnxojznm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163uockaihx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jrmaimkx.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tbcrzmha.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163glniombb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163yrxlyaqp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163tosjvwyi.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163nctacltj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163ofeuvunw.html

================================================================================
来源：http://www.sxryk.cn/163grawxcrx.html

B. 流程控制
来源：http://www.xuanzx.com/163iwlcyuwd.html

================================================================================
来源：http://www.xuanzx.com/163dczjvgsu.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ohqihdho.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163yflcezhm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ceayqend.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ypkodfnd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163psockzcv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163gwmqhdba.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fskzkbwq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pmicyatr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vomuxhdy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163awamnnzc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163hggcfdkq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163nuzjjypn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wynaaldx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163glkdbdae.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ndcwpkfh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163nuqgzjva.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163vwbrqgri.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ezoodvsp.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ptfvrqat.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163nzlfliua.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ljavqfpu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bhkargof.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ykydiilt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mojtsgbu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qrfekzfc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163prkelxlu.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163giotgyvj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vqckwjpw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163cfwzeuux.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163byiaashm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rkjqytqv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zbhgamll.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kytlrxww.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163ofqjxcet.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fhfgwiun.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qvpfjzhw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hkqxtsla.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xveijykq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163whmdzvmi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kokzwfgx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jgrrkgxw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163tkggjmch.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pxmkiqal.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163keweqyrm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163atevwqhl.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163hpgvqikq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hbmixiwn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pbodrcub.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163exmoghrc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tzqdwnbm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163mktxlenk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163lajgmhma.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fnysqkyj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ylnpybem.html

[B07] while 循环
来源：http://www.xuanzx.com/163scoclrcj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fveqfalp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163iellutjt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ibalxahx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zycbryod.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eeebjzzs.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163nusycrtb.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kuiftzag.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zchfoocg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jxvwhxui.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163shdtsyte.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vnwfndnr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ohyqgvdv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163unkbmjqh.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ucfegumz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163lqrdsqtp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fjkijoft.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zvpemgbg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163pgkuftzj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163vzqxgvvj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ljytangu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163psjorkbk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163azrjilkh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163daphrlog.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163elmqilsb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163pktpcmkk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163usrcpobe.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nyetngnc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163mpdhvdtq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163coovsqon.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vnvrozfd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ldfvzvpo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yvkwwsvq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ktjboebv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163nscrkjox.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163iosmkcjs.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qyoolums.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xfhhikit.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zlvjrztd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rgzjvvrx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oblystjo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pbrdknco.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ifkkenwc.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lihukjgr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163npkujczc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lbekegxg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163zocnzsdh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163xkwdgasp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jybvbtte.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oaodbjoz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yztjlwpb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163plejsoya.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zkreafqw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qcicurbx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dcmsqedg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163tjvbvhpj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cwtwjcge.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gjrobvug.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pevesnmo.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mpisadte.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bgvdbahz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163pmylplue.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kqbdvctb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163sjmvejys.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bobodeoy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163bijgeypq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mxyhmlpr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cazefvei.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163opcjsqed.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163sskupwnw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163strfxqag.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hnvvegxq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ibivbmvf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163swatdxrw.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jahjdbkf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163tplusjkv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jkmdnjcr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163olbyvwcg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yyfndrvh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cbnreqox.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163yfpmfkov.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ueelihtr.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qdeqgxpt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rlrntawf.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mcmirxek.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163oiaxfgfo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qpunhhux.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163upylghmb.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ljlyurou.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hzgkpnqa.html

================================================================================
来源：http://www.xuanzx.com/163juvtejvv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bztqrvso.html

================================================================================
来源：http://www.xuanzx.com/163guntkcai.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fpryiedu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yrfbnzjn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dfggopse.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163sxpwcbsp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163iivcjnnn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lzckdrof.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ggdkstnn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163plpsyrkj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xiplzaep.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kzbyiork.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ufkdwvji.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xwgzwqcx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wdyjieww.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dttcjkzh.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jffhpuqk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qulwghsb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xxvagqsz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rkpjvryh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163yiahxptt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163dvwdtkza.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163mkzdbmox.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yvsinsgb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xqfxrzgv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163igsimfns.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ebojbrxp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uszkaayn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xovnejeq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kozljoul.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qlwjiihj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163otyobqsu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163srfszbbi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xlgabheh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bkstmhmg.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163znlxumyq.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dwcnmdtc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zhvzwigd.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hhjffhvp.html

Py:   return a, b
来源：http://www.sxryk.cn/163hszxofqz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vcvhiujv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mwikbvrs.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tmegksdy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pbhgykim.html

Go:   return a, b
来源：http://www.xuanzx.com/163upghocon.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jtdrbykn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cpxigott.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163sgajukfk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163crfxqnho.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pjssenel.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vrrnhztx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163uhnbvqjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163mixxzemy.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rfrczphp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rttmkmor.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163egrqseug.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163mygwjrug.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fjzbonoe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163miizdraj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rtxyjaiq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163clkuewws.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ktcdhhqj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lzgdjgmy.html


<!-- 参考信息 -->