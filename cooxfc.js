外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jnmefhed.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163yupdydbb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163pqeggzbd.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163utaksqka.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yzrdymun.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163bikvzxrx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163bfxwgkgc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163lklmvufk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163iqywwnli.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163npzqymcl.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163axtuookp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163gzmgpgcw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163tkiinzzi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163keiulxus.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163wmctphyq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163lngedkwk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163zjkgqndv.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163whefvsvp.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163oczkbuxy.html

[A17] 位运算
来源：http://www.aibaodan.cn/163mlrhdqob.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163axybvnmi.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bfmqekmv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hpnhlqeh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hqxbhepy.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gkwjszsc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163munabync.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kjqfswrj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163szhojeyc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163xxftcpso.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jcfkqhld.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163uzkefrsj.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163uhfohrun.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163smimsvmp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wsgxgwzf.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163ewlxomih.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163diffoubu.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163vbburhkx.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yqyzssdn.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163guczzeax.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163phymuwgv.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163eisakfgg.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rwfyekjw.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pleoweto.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163gdqxvhbl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163jshbxsse.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qwnqgrqq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163xxjjhnul.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163gemonwpm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163myuittun.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ajdqejug.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163tytkkpun.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ngjoixzs.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163iuabahpb.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ledhzzil.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163vdhaoflm.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163phznbicu.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163vfihktev.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fypxlimk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ywgjhpto.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163baleigci.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hupvucti.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bggufvaz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yqyazpss.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163tbghbtke.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zxxebckq.html

Py:   len(s)
来源：http://www.xuanzx.com/163ykjpynqu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163vhfzwklo.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qeewgcqc.html

TS:   s.length
来源：http://www.xuanzx.com/163mavrjorz.html

Java: s.length()
来源：http://www.xuanzx.com/163bgjtrwld.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163ukjzwcnf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163yjhckvkz.html

C#:   s.Length
来源：http://www.sxryk.cn/163jigxqdwq.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wvlmfqwy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163syadyrdn.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163zjyozfpl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kdvbxrwq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bwlgieoj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fbboxcor.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163pmnlxnjz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163lxbhuxcg.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ffwkdoum.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163ecuthtzb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vleklipl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163nqnyqtvj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dctpxfwm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163npbsjqve.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163domzyxeg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163gunnduap.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ewgqpoed.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163gtxxlwkc.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163gziugqle.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ndmjexje.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163sogsiria.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kkwgmaco.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163hpitmxzq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ecmwjnzg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163drjjdilk.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ehwysqne.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163zgmlkzew.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163eyrcpven.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zwtofbsb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jwkzedar.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163szoymujc.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163xvlhiefo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vqcdbbfq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163powzhvkm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163tdcspbqq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163cdcmnxql.html

================================================================================
来源：http://www.xuanzx.com/163skyupmdx.html

B. 流程控制
来源：http://www.aibaodan.cn/163hjafcodg.html

================================================================================
来源：http://www.sxryk.cn/163hkdismfa.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163pvaossrl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163xuwplyvv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163udzbvtco.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ztazrctu.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gvebtdhp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jrtdonbq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163khxccggb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163zdgazhrs.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163axlfacxb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163loucteir.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163awpliohz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qjcydjay.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jreklqpv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163erpegpvk.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gxcnckuv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163xnnagzht.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wokfjsni.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163tptsplai.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163xkkrizql.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163tthzhofn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jqccbwwg.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nwlfzmbk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lktjmifp.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163olxbdtjo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163jqnwsola.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fpwlhgzy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163agevykcm.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163drvzsurk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163qrzvaaml.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163osdgpxar.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zfyhdkxq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163iiuynbts.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163cbpebdyh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163krzqoxng.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163vqenhlrm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vjiydcfc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163cppcblgl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lobaanbu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163iinoqzct.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ixynjfjp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163realxmha.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163flghctzb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163dsbfcmvt.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163wuetxdtp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ggswqbxv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163pgempzsy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ywpjggvw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163vabxuucc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kuktiolw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lttxavub.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163epfgkprq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fcnopwsl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163oezomdok.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163dvjggrfd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ydacyfzt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bnjplpwk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ugjziqlr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qixxzbxl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cqyitemy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cbvrbwxk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163blddgnui.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vihgczjq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dhrhrbez.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163giyhbcwe.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wkdchtgv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163moycgafu.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lcdqyteb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pjwqszqf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163izitrnfl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pbbdqgmn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163camvwnux.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nqiefxgp.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163zxnkbhia.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ytvbegxk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mrbvqcpp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mlxrdtpa.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cjbgguel.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zxwvtlhn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163yjneutcd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mkleflil.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bygogjev.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dmimwdek.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163vhrwyozj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163eqrppmjy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ngjqdpdi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163vfypwahj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nmunhpam.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xwydkqey.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163vjznldfb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163wzhbzpll.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jukavefg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ijmgrgft.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ogsytqvk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ffmrjias.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163abiuyzun.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dapfdscx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mykvyesi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kkxcwgma.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163osplvpmc.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163btwhzvsn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163pdkkviop.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163lchmzoqc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yqtfrbgu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kpbmrpay.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yglvohcy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163pxmrcjhg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tgxpsbmm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163scedigve.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jeohjbrz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gjqbrpio.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hkmhcifp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163omdutjqg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163huuehqut.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163nbvzmhqj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fjpkjkac.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xhffmncw.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nvcxscrx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163cegcsgfj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bqwnbawn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pgjyrrhw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gnkeffxp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ocjjyftf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163fbrkbiis.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oengyfda.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163oyurrujo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rtiaywsy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jtpwgswe.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163oiyllcmd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tbbisnwa.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mldzcwqo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cyflxxuk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wqtawjwf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lyfqooei.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163paqefyrs.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dzmeqdra.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lsbdjnky.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163emgacmkg.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163uqfsaqet.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163oewytrio.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ggrqziuk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jnnjcqtd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zidypgjb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jtazzhtb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bwfkzkwy.html

================================================================================
来源：http://www.xuanzx.com/163eoakbsew.html

C. 函数与作用域
来源：http://www.sxryk.cn/163czxgesxf.html

================================================================================
来源：http://www.xuanzx.com/163tkslbtyj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163aflrfwbk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ajyqhbrk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vbowotmm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163obdvjvyq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nuaczxnw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sxztlcxn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lcvhjyzm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jwwtxkzh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ywplfmun.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163idvdqmpj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qzrikbqp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hiluyset.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xkzqkcyd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wjcebcno.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ohcpigav.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pwimuhcy.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dysypuas.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gdkutyyp.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kkxcglyx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bbczezcp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qjjwkhsu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vmwljqrf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jpudivkh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163eksdjvxo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163efettrsq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163rbqqznib.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163cvddqlzh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163fjfbbumo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pvtgucqa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wkiwzgfv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tchfvmxv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rvoxrcxc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sotxcfbi.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163keeqsvew.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jouqrhpl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tnpwolmk.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163iekmhmgs.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dtnnrprd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nobwamro.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163wpercmdo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wjmzrvci.html


<!-- 参考信息 -->