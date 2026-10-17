外链999!wailian999！

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jdlfvjdy.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uldsyedg.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163qfsigvsn.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163nlqjarlk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163mjaqddqf.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163fquvthdm.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163djnvcujb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163lffblskz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163rysfiwxo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163xhkblnif.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163zmrgzluk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163mvgmwosl.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163pjlfuccg.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xqzxjyzh.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163bttwcose.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cdwfamnw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163trqzarin.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163hbpgpiwr.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pxccnppe.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ebpyjerc.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163ucbzqiht.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163nnwiyiji.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ikdmivin.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jfclndca.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163kuofhpsi.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163yravtonn.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vfqdakxk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163qqrliqoi.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qeaennwx.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xdppllnk.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163yddkvmno.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163eodlfbft.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163coamygoy.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qcgnxixo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163eqpujxqm.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163peppasnh.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163uapmgqas.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163uxonlovy.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163riafmyhe.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163jycldxxp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163lwqdcakx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163jcfcxktt.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163zrocfvqw.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163cfnvqphp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ottovlfm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ddkwlkgx.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163qrjrevfc.html

[A17] 位运算
来源：http://www.xuanzx.com/163dwgtozwa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kgeyqepd.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163arkevcgr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kiobxuss.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163sjpxmcqs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iewrbjzj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dtvnssrt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kikxcwwp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163drrbwhtm.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163mqmhaxsw.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163zksbwili.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163hnhumeut.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mykupqfh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163yeyeluwb.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163tsytuhpl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163mckfmeqr.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163wsogqtez.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163fvnuppol.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ldjgfehk.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163mukhxnfq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163agrpkcoo.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uzhctgdw.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163xqfekxwt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163xlmitkbf.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163snhrpuny.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163thrqpbzc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163mldefdpc.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lxdwqevp.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163wydtiedd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163pefsvqxv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163mbuovixi.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163okmakdwd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163hubwssml.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163jeziuiax.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ivjpaaza.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163bczjwyll.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ferqbwgj.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163zrwnzmrp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163onmgmkcr.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163azddxfby.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163bqorsbyi.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xvyeffaa.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lfsgjcid.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pglbhyzf.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163jzsvtfkc.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163iigwelao.html

Py:   len(s)
来源：http://www.aibaodan.cn/163pspjroku.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dutzqzso.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163kmwiezsw.html

TS:   s.length
来源：http://www.aibaodan.cn/163xnplskoo.html

Java: s.length()
来源：http://www.aibaodan.cn/163toychgnq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163xfcypwzj.html

Ruby: s.length
来源：http://www.sxryk.cn/163czuxiyng.html

C#:   s.Length
来源：http://www.xuanzx.com/163xnfbeyur.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163xacwdlno.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ntfoewrw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163mkfujbnn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tfacqrsj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pggmkfal.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nggelhkv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163gyuwnlgz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tzmkudjs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vhwmaanb.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163qcxpfpxd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163tqxhzeqq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163sjzvpezx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163almhqflg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kohffywm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163dlpywpbo.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163aujysmfu.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163icblvbcm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163platunzs.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bztxveuy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163nzdgxlon.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163dmoqgckf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163yqkfljpc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ofbljcdg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163txitzcwt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163tuqnyzmu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vvzzthrv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163wyooooaj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nffhvmnf.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163zfppqako.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jkytwoiq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163yyvrwlqm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163lekazjvb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163khoeoypi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163orzpzerr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163hthxspmk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163bcbbyxwh.html

================================================================================
来源：http://www.sxryk.cn/163wzxfsjmt.html

B. 流程控制
来源：http://www.sxryk.cn/163xxzywmom.html

================================================================================
来源：http://www.xuanzx.com/163xtzfixuc.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163aqrxigrh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vebkptmm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163pbeklsle.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wtsugvjq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163whwphtnl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yqcrzozp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163eepldzla.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163smoczsvo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vklzdecm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163zzyuwvhn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163crtaveji.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163qvwmcyat.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163smoggnyq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qisypeeq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zilgzeae.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163nbiyutoy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bsrlrlrz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pimfynsm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163tgojyaqw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163gzromrln.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163otrsjhin.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kqtxbbsh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dymyxolm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163psxdqnwr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fynoexol.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163mbytvrhf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163krfeiutl.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163qjwfgbej.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fuvzivyy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mpzhzawh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zyrxywfl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lzjsjezp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wgznzslg.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vnpsavle.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163frzbjjrc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163iacsyyws.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163pgvtjjyh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163igpykdlv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163mtnseplx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163fxpdoptv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uxncwxut.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163okglhnkm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tgqipvwi.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nclrwvus.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163cfwvfshj.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163dyuosgzg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ypobfeis.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hvnqyops.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ilgrlspn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hgwckfwi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jmuafqai.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ofliviuq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zsdwiikp.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cgzpysjd.html

[B07] while 循环
来源：http://www.xuanzx.com/163yxrzktkp.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163kwexupwp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163safnearb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tatjcbha.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wvmarnsg.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qmowkizj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qwngazji.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163uokolbcp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163odsthfep.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ptegebzr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163urlncxmj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163aqnvwoui.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xlvslobr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yaojgxzg.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163psgmcvwk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tiepeere.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ppxsrffo.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ajpbfaot.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fzecbjcc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163cwygvqtv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qtxpoqmj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163szmlpeug.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jdsulujm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163asmzypvn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163xrfacshg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rglkcypw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163chstvakn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163cylebofv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163trgklesn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163civuzfzk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vvfbmmma.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163notzrmql.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rrsdgmhl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163hfmpeauu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rkaelrxt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163txetcdnw.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163eirwxcjr.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163erizfwmm.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163kthwhvco.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jrwsxqtm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ifvbfbsr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163oqitfijk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yujhyeys.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wjvlcmrn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ngdvwtbc.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hdtuhlbp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163biehlfsb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gppanokw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rajmzlxm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zfsxrrzv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gwgfpftx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qjayzpfg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qpfxbhsw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hozrtfle.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ljjoemlt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pcyifbkb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lgrgpjqa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163didqwtmd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ilgcvcql.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163lppuwqwi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163olmjykxf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163guxigzum.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163uqqtwxxy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163fwoeaqkt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163shsdphlt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fuzcdbsy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vcgcighb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aouldwpp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gnqewbua.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163rdnykqbm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xjqgmjoy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qvwhqcey.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ztgnzbai.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lbftmxkd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163daefcpaf.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xioqenys.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mhnckhng.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pssojaga.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gzwrluou.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zftawdgn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163efjqschz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ofzseywx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ahfaaaya.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vryexpjo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pbldkfea.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163klejkyiv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nzaefskc.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163znmjazhw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vlllxnag.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vigapnlb.html

================================================================================
来源：http://www.sxryk.cn/163togmdxqo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163trvnohzd.html

================================================================================
来源：http://www.sxryk.cn/163nkjggter.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xiwpcihj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mqgzxzur.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lnsmhvcp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cnbnmlvv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wlocdbfn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jpavkfzs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ekcsmecb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163nfqcbksb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xvsrdbqu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163clnzkejh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163cfpaawdn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kxagimjh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ukgkbyem.html


<!-- 参考信息 -->