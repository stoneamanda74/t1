外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bpocmiyo.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163btifhrnx.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163vdodvmrf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163ymqsyfnp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163gyukyjal.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163lxldkbko.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cgbkbfju.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163swovanxe.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163sfadfnbo.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163fcfnkasy.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163yljyvbzh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163rwxpyrtt.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163recxmsbo.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163teatbxwj.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nkmfchnq.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qmoibvdl.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163tjkngfrj.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163dhyofxyo.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163smxznaaj.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oownzrna.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163fmahhpnx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163btrgswxr.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zuzmbctk.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hxshksup.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163zfxlucjj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wuaaawsi.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zvdwvddu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163okbegytw.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qevlujgz.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163cqnttgas.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163hittgqsc.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bodwwawl.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163jzopepni.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163xomipayn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163kkmbnurk.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tcksntfc.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bydozatu.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tknlyogb.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163ffoairee.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163iqnhdmhf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163uthyupci.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ypakqeak.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163felotsrg.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163whhbftfk.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163apbbycpr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163mgkcshju.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163kzhdhdks.html

[A17] 位运算
来源：http://www.sxryk.cn/163uaglprtq.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wzmmrdhl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xbvcdigz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rhsemjbd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ssigasly.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mqonhbro.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wfzeartq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ovkgxnrd.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fhmfodxt.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163pgxfpses.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163mwfpkxzk.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163usasyqsn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lmelutgm.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mgzaqrah.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163sfveavqj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163zzmibpnc.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163mloxmhbn.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163mknxyraz.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lrlhmpbr.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163dkzszxen.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163xxvoours.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kihzyyza.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163skqonjrr.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163yjgyvcgp.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163wddqgoig.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163qbxepmfo.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163mspxkuvm.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ouvefrwc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163miqexxny.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163nimqdrlg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163rkwcphwt.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163vqdinxzj.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163uuymxkun.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163nmrcpvgu.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163cpfdypud.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163giognrsb.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163kklfjeou.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163pkutiubz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163lngwstic.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163culdvggq.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xsyajcjc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yubchgwd.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163maivmeui.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dmyoinvz.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163suidhpyn.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163xjsfgemv.html

Py:   len(s)
来源：http://www.xuanzx.com/163ffriaszf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163begkhtpq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163otrzcekl.html

TS:   s.length
来源：http://www.aibaodan.cn/163jtkrgcyg.html

Java: s.length()
来源：http://www.aibaodan.cn/163hlfjrhcx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163szhimtcl.html

Ruby: s.length
来源：http://www.xuanzx.com/163zivehuqs.html

C#:   s.Length
来源：http://www.aibaodan.cn/163dcqvgrqa.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tbbjnfwd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163mugrwget.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163guecltfe.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163donhgzcm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gdgbmvlk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163rjukwiti.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mwxaskxc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163mdmgaikx.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ibklhvso.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hyaznblp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163ghozddox.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163xvbtiauw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lrnbzhsn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163weqqocri.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163iwjlkfhg.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163khorriag.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163eefsdcwu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163icqbbsfy.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163anxrpvpu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ncvqsara.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xshinykf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163muicdpoj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163myzfravr.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dzixzhhn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163lnqyfxkb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163gwytkvhq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163crdpowjx.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163ofuvreuh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zdqjwvrq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163anfjogzn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163gtsgwbmj.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gndgrncu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zavxvrhe.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163hezgcwsh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163pqeyizio.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xzgvwgaz.html

================================================================================
来源：http://www.xuanzx.com/163njewqttk.html

B. 流程控制
来源：http://www.xuanzx.com/163hqwnmndp.html

================================================================================
来源：http://www.xuanzx.com/163iidpdoks.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ibktlwxu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163rnnqspnu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163tnuyohhm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xpvkdxxe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kuoogfpk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yhhaaihs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163knlqblga.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163lqusgrck.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mqtrlhcz.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163vvcgrdtm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163wmpuunrq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bzddslho.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cltcjzjo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fkaglqqf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tahfvvmw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bqxdhpma.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163adzxalpq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163blylqxyi.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163nqttnlux.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vgzzpolz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163iijvncyt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pxgrrxlc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bvaoiloq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nkrephbb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163kxxbbujv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qxqugchn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163abizmdxc.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163xjdkcoeb.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163betantpc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163wxpgcimh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dyiudtzx.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bkbznmhw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163gbrghdbp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cfuoguvh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163elryquji.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uewhtzvp.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dbddhlof.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163urgicbox.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163vztgmdjs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ooqmvkja.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cbnapznu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lqpororp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163glnfrzfp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163epyovbmr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ctqmionq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163jpmhsqkx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vrxejoir.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uhfcjdih.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163lankufjh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qqsmkhuf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ysqccglf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kilhkpcc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163lghhvfmy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cqhgvsdp.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xusltbwi.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163kksjriki.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nrkmrwoa.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rbgnhxhn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fghstrgv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ykpdbocg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ebcmuyfx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163cqjrymhp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163onadkijw.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wmpdppkm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163frfljgxq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qixwkgxw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jpwtcxmd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163isxygxjx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hlhqkamx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163epzyokav.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ujybnjpd.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mkzfgxeg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zerayixa.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ccgahqey.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qcjietgs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jgxobyfm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163noxvehqu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qkimiurz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163hubgssuj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163qiispqag.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dxlhjoxw.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ogtyaxpt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rumskstq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vxamgzxa.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163uzphpidc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zklzkbkn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybqdlinl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163libbrhmj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ggyenfyq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wpokwlyw.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ohnumozs.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163srwvhdxf.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ddpfqixt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fxzdnvfp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vsspkayi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fbihyrub.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163amngiwpa.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163swxwotre.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mrirtnhk.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163nbzvpgda.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163prmsbmei.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163qkrayoqd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nitsheyc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jmyrvodp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fqgdycht.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zeqvkwyv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163mvgttrki.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163vebcdtyy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163rexjbput.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zyxxfxag.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ndhdnozx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jzogrjwj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163utmuzaot.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ymddkngs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ngulyujl.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mznrzlgl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ocflkovi.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163toofsnef.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dvwpzdou.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163awjhzrlk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nccpqnzb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vtvfbupt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163nikbranb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hpwbnwlc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163lwahjmlp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dsyngsis.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qwztcima.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163povzwgjr.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qahukpcb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163hwuwlaob.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bxksctff.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163rlbhxjwf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ypnipzmh.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163mlnhozje.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163sngzmbuw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163dmffmhhn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163puhlivqz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lvlzakdz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rhvyiiqw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163txyfajri.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ntnmztpe.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rnofyjrh.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kfubennm.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xwybretp.html

================================================================================
来源：http://www.xuanzx.com/163lrpehdgb.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dtkivpkd.html

================================================================================
来源：http://www.aibaodan.cn/163cxqvftmg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qphxesvk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ouanqryw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xrunfrbp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163dydriwut.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zuekhdxa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cmtjdeqw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163navbvued.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163epitinwo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zgdmeisb.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xobkqjby.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xtydzxqh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xtluumbo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ykwzclwr.html


<!-- 参考信息 -->