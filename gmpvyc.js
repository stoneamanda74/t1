外链999!wailian999！

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163isohvqzm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163kstyietu.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163vslaxpyy.html

[A17] 位运算
来源：http://www.sxryk.cn/163zywpcliu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163pthfnlrq.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163uwheobrs.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163izjilech.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163bcdqafrw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pnestjff.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163idmydhvz.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mwbshcfk.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iibzekyb.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ahtyrack.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163oisnqumm.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163sdtdfjlg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163etxklxoh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xvnptcpz.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ekujpugw.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163deairxeh.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163zhlqhnsj.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163zejponpg.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163aqzpjkxa.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ievmpmzd.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wfzhyhsa.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163wkvvrkkq.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163andgnmve.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ypahjiiy.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163bfiakkwd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163twamhlah.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163jbxjndcl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qpoyaxme.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163uugnxiks.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163xjvmwyrc.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xinfwjze.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163bfcwjybp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163yzexqmdg.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163awkivamz.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163bhtedopb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163owburalk.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163dzisotkf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163adlwntnw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163exygrnsc.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hbsecinw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ttixnxai.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tmzatdqh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dkxwmpbn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163doeadaxj.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163nbvxiqtc.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163egnhprid.html

Py:   len(s)
来源：http://www.aibaodan.cn/163cluuqruj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163chihigkh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ayamtmxt.html

TS:   s.length
来源：http://www.sxryk.cn/163iystxmdb.html

Java: s.length()
来源：http://www.xuanzx.com/163mkpqchdq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163owiqkbdu.html

Ruby: s.length
来源：http://www.xuanzx.com/163wqvdfnxq.html

C#:   s.Length
来源：http://www.sxryk.cn/163mbzizqru.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163hktnekxl.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163xornxplm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163odtqktrx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fgkbvssz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163khxxplni.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ejvbnmzs.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163rcnbqdax.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163niolyuwr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163noszopfe.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hgerixqw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163rmvyaamm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163vaiprjvd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ubmhfwar.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dwfxxxei.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163kxyyauwg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163qiwbwseb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163nvodrwop.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163crumgybu.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163vypoyqlv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pqkcghhi.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163helykhqr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163algehteu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ceotgsdv.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163chzuvjhu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hyidrhpn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163wwqyqlsd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163cfuegyld.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xesgzpuy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wyvbymew.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jkfysyky.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163xvlwnuzy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163oplvkaez.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163yhaztnoo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163lboctmyb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lrypqqij.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jervrflw.html

================================================================================
来源：http://www.sxryk.cn/163mckeythe.html

B. 流程控制
来源：http://www.aibaodan.cn/163mvldtkwb.html

================================================================================
来源：http://www.aibaodan.cn/163mqirdhrv.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163yevlpolv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163tgedqxgh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xfnapjnw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mmhvuxsb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163azxpcqao.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163caebaufu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163exkkcghh.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163erzoself.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qitfxrhq.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163dockmqup.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163uzgaxizn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tvpxzszg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cwsmsnki.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ravgonvx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qosviake.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163cbqaxrbq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uysjbbub.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pcprwjbn.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163okfjgesz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pzylnltt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163seiruglk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163althsjcz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fdubovtu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163vdlrojji.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163pbqhinrj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163hxpeazts.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gpkluvxh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163wfffevlb.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163baswdmts.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ktdmkycb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nugeugcf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163lrstbvxm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ziklfhqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ttbhrwfs.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163irjrbxuj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qzkanwbe.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163rikxvsub.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163drgspizk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163avxbilwu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ozgfnnes.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163bzlwjjcy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fpcfrcar.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163itoxhdfh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163oxxkoiym.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163nqmjgjwh.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163sqrqvsyi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pneyeuli.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163bsqtatmv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bricwyug.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xrrvjfkh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ppbggpiz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fablrvjd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fngpyhly.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kchoewgt.html

[B07] while 循环
来源：http://www.xuanzx.com/163dgscdefi.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163qeljapgm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163osfgyerp.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tgvchmkv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163obffuaua.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163krvbrjsf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rijdbusy.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zbotoafc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bbmwpbhd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163cxcyulpf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gzrosugc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163stectzjr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zyczflkn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bvrdiubn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163czicrhev.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163cnwygkdq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wzcgxlgx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163prhviark.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163pdfliepq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wpfdisyw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163beuimyub.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qqgtrqoz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kfmaumld.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rndddnto.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163zwzzatii.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163zgypaljk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rmphuqkl.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tfnhjlrq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qcacvgkg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jnvjjmlj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yayvwqwy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kbdhszzq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163feurrctd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bbvrcddx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163tfyzalec.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jdjjaasa.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163tebhaslw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ttbozqel.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jdxddntw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163roratnek.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yowqqzzo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ennedare.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nvjukjhz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ouxaiwwc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163uzpicbwk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163nxetbjrz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163albomjhh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163msoyarjc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yybeslle.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jtaklsvt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ddmozpjr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163iubfdfra.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163brrwptwj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163hryytpnu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wdctudqv.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fwajphhu.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qgvwvdlq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hmdoohwb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yupdbdgm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nlgzqnvq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163pfsmhzzp.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163meswejpx.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163yzuxuhpm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163kdxawchf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163psupznqb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163itxxvbyn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ndikhfbr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nychczax.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163aazygmju.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163nbgwxuer.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163gukqczge.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dhpaczyb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tcluimco.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jwungglc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qmookmdw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tnlmmqsn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163falyvrpw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dmebhtud.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163oorahemw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163scspuygt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hanhrrgf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163prmymxbu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wohlgziq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ebcnbguj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163eokspoen.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163eiqickwv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163sljxxanr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ziwspzws.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ynjaolsg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gjzvtwzq.html

================================================================================
来源：http://www.xuanzx.com/163keqzfgqm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163urwgzlnd.html

================================================================================
来源：http://www.sxryk.cn/163ojfxqnyq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iyutjnty.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ruqdtoef.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163joulcjsx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163bkgmmmsm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163eranjckp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tuzojwvm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163axjatphj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jixvofcb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jqztnqqw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wukjlwsg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163blspnudt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bsgvgica.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163znrykkdk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ggomyhpr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163gzwolkpv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163taaleyrt.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vkxtygkn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163jbsnrjcb.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bmrhkbpe.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ontenjdl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ubbfjyqb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tlntittw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dtityflc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163vbdvxzhl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163bvltyhhb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ocvzdyjb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ecycxwap.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163psrcfaac.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qvyukmrb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163esooitxf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qnqjyeqz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jaugqmme.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163eimzywdf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yxdgmnik.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qlidnsmu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xkptcejq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mejergcp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163arcshguo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ycupdjxg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163giascesd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163axnyhfcl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rjvydpus.html

Go:   return a, b
来源：http://www.aibaodan.cn/163amnnpxwf.html

Ruby: return a, b
来源：http://www.xuanzx.com/163pbavgzic.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dbhldddl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pwuajxka.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163slhcaavl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xqlojvff.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fihylnqs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xvmgjvhc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qkpluizr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wuszlezr.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163rdjpneen.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163stecrzln.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163walejwxr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wydmyypl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163lvycdjrf.html


<!-- 参考信息 -->