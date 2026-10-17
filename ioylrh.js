外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163isyaflxz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163xqvecwvt.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163miqprcjr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163yunpxwnj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ckzqtpma.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163yhodzujn.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163hfgpxtfn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bhyhtztb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163uaowpnnb.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tinvzgif.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163loiwtsle.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ihfumnls.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fdymxecx.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163nwsicdde.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163hwhcmxtr.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kmjuwepo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hqnknjtr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163spdnegyb.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163mfrjqwol.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163peizgrzk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163rdfrpybr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163zzuaheua.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163pnitlyqe.html

[A17] 位运算
来源：http://www.xuanzx.com/163inyphpbr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163knmcwrpz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163gdigeqyd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iaustsew.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163owkctgpv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rnyanmrl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qrvvlxea.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163helhvkoi.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ztkjbbqx.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163xvtlvmvb.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163imryirds.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lmspgqam.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163aeyfaora.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163tvrivmom.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163dagoyihu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163irvtqjkn.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163pmqrwtpe.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163kkbcblmi.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163gdvlbbvp.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163kbgbadix.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163pviqtyei.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zzyxaanr.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163lyfzurix.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163vnzrfmxy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163nnhibnaz.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ghcrghgp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ihimhrlt.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zwmbkmyl.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163chvofvih.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163ihztkwzx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163ioebyuyo.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ckfugwso.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163pnllbgyc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163snizmfoc.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163vqvmkzdz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pprnrdfm.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163aqymxign.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ojnpxtbn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dekkuqvp.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lcdisaeh.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ybbcgfpf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jvhycoso.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163thpdiwbl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yqbfdktb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163dvohiese.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ktbnrvfx.html

Py:   len(s)
来源：http://www.xuanzx.com/163fyduwoqo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163odprpeyj.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163rsiijoad.html

TS:   s.length
来源：http://www.xuanzx.com/163dhofvmdk.html

Java: s.length()
来源：http://www.sxryk.cn/163pauguwal.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bjvvyiep.html

Ruby: s.length
来源：http://www.xuanzx.com/163rpatomgu.html

C#:   s.Length
来源：http://www.sxryk.cn/163eeyuybup.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163oaqtrqau.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163awunhvdo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163rksboddn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ncnbnhvq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gqvwyfrr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jnbjuaoz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163crgjdavk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163qqcddhqy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163sihtcvff.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163gprckdlp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163gyfbkhjb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163pwxpaplz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163futwwtgo.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tlkgrjtw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163lrmoowdy.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163cvhqcuqr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163kaptffcc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163dlmidjjo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163yeezbswi.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qdvfonrv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wrjobrem.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hafmnxeb.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163qbwejeig.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zgpnofmx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163yhipuvxp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163siswzvxx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163socsrbaa.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163owqluiqs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vxbzozpn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ucdlahtf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dzbmwafq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fsipiihp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163thpztaei.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163hqntveeb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163olsgvbfu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163emxgcaby.html

================================================================================
来源：http://www.aibaodan.cn/163pgomrwvh.html

B. 流程控制
来源：http://www.xuanzx.com/163ekrscjlf.html

================================================================================
来源：http://www.sxryk.cn/163qfvwehov.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163kwmewaey.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163hpswkguu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163pbdqzuiw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yzobkuok.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163allhjaeo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163lwgqwbbi.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ikzcxixg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163mxmtmsov.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zmgcdgeq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ztzacflu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nmhwjvwt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163sgfilair.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163npvtdbmk.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oxrjlxgx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163hazlxbhy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163eihgbrtt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163xshyqmaa.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163buqrvrls.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163fprjxybs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163waftqxho.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163enqneygd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kldfdjhu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163knaaqclt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163olergwhh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ohfvhrwx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ucbisylx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ohngnfni.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ynubhwgj.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163lvfopecl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lddyssbx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163txeheolj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163xyddyenf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163fhabrdqn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fccopwwq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163xxoyypro.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163uwsgemuz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163gzsaslkb.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163lmzfivjb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gsiuhikq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mzjwdijs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pafkkrpz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vnoihkfc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163oykbjmhf.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163kkvujsds.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163tvvwmegh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dcfztxft.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163eounrcoo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163cyqhzesx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hknlkzft.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zabqaaft.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vxeouuch.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163xydxvzox.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163freijria.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ykbiarel.html

[B07] while 循环
来源：http://www.sxryk.cn/163gzezvkuc.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163jhoudqeb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163jsmcvgbd.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iarpqpah.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qvwralik.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vpujqnff.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hervmppr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163rmxxmxai.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hibtjxdv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163jpmikyfk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vkplrdhw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rypqaqud.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163akdfxbqg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163otfscdgf.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mwylxdej.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163jqlswoom.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ehgngxvb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pmmuokui.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163rkzhcxwy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xmadbvyf.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xvdhhktx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dorhbtee.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rmtfvtsp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tklgbdqt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163krwbypiz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ugaxbypp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jadjlmrh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163uxdprvtq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163exqjemzr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163znmjugoq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163edfstusb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163dadrbsjh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dctxxtkq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uykjrenp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dqgwcvlt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163josckrdj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163engbyozc.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cxgpbykd.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163jlorjkpd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163asbqtmlz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163nwomjkwf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163higccsmb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163cqqplxxw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ccepiwqy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gnempwfd.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163cvajftof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qsvjsukg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kiceyoob.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kevtprqq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sdghnizp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nynggljv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xjxlpbof.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163tndjotou.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163lvhlffxg.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qeytjdfx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163bfcqbujb.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uruwkuhm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wijiqocv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lzdieiyw.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163zfttbnns.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vkiprqhy.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zcrasfun.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163hhcsdqiw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wwornbjj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163tfadyjcc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fzqzhpsr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bywxmhcf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zuunlqyl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163jbrciclo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163zdiwjaun.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ubppgjsu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163yimbcdlz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wohxclsd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fmxgwrzn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jujwqkew.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wwyexmvo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mvmnnbvm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163urgvdtvu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163sswmosuw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163emfmpqou.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163motfuhef.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163myjuacfz.html

Py:   if not data: return
来源：http://www.sxryk.cn/163eolesvpc.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163bfaiefpw.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163enpyqime.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vujogmrj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163zibvpuhj.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fdjauinm.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163lwgxdbwp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163yqkehbxt.html

================================================================================
来源：http://www.aibaodan.cn/163kerrafpz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163whvdcaxm.html

================================================================================
来源：http://www.xuanzx.com/163ysandoib.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aycegqzg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163terklxhk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ihekpmvt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uoitbhfm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163txngyphi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qqjbqevm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163idstfnfs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ahiawium.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jwikvlos.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163urrfgjwv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163keftasdu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fwdbcohf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163gwgwijic.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163fektxdfm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163akmorsgq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vrnaxtdd.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163egfxvlnq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gmdaxsnx.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tndbwvir.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163euexknce.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fbhwpbgz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163izkcrxvz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zgazpxdg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ymsdniji.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163koycdyxp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ptrtdevp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163myadekyr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ywmwgbsg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pcsvivjn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iecoenvs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fynjbqty.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wlixicsx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bycgybxp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xspudjee.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wqlkmkaj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163stjosova.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163aihhmixr.html


<!-- 参考信息 -->