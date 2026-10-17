外链999!wailian999！

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163xznxeuzp.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163lfdjxskx.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163yueblktb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163eozugfvj.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bpdimtuc.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163wmomxpcx.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mlsssirg.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tyhijrhd.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163avaxywei.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163weqtgily.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163jqzgqapg.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nhjxqxua.html

[A14] 注释写法
来源：http://www.xuanzx.com/163gmexoozh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ybnxgwih.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163fwithfry.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yhhcypfn.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lsiagdjn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163znlqtmlj.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uzgwgemz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163miumybfp.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ooaaytam.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163yreptzcs.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163rmszqujj.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163zofdfzii.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ngwjgser.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ucxqsszz.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163mpnnysqb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163fnimcvjn.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163egzsvnxi.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163jbzhmvnp.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vegabtem.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rgckoemd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163cnmwpgwi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ykxrxlmc.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nbyhwrar.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163vlswpvws.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163jhlxfmow.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ilpctegw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163scywuocc.html

[A17] 位运算
来源：http://www.sxryk.cn/163wofxpgiy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163irhvevwj.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163xfbascen.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qjnvebiy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163uufztmlv.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163syxebzja.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163notfblvf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wmdphbeb.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163psguhshf.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163xngvylqv.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163eloafjtr.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cvphkqyd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mnnpbijd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163lsplfets.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163ibuwxbyg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hnbbqtss.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163zuzcixbz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163jdtorogd.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163cbvanzzb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jpjdbbnh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163qxeyewrt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163chcvmmtl.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bygtnaio.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163woelhvzz.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163baqlxhuy.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163mmhhydtz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163qqwfyfrr.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163igtzyksw.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163ntmgriaj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163bnwnaquu.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ywynubup.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163wdproipi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163fjnokbao.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dfbrvbdu.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163lyyulyxi.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163oxeuloum.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163dglvkyhe.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ktxmsrwa.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uatqouqz.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163imgehrqc.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nlqffgii.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163duaflhxi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vgiwvqsm.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pzpmfqqd.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163jhdytoyz.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163oojhkdyh.html

Py:   len(s)
来源：http://www.sxryk.cn/163epqdayah.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zbzanrze.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vlpxfwyi.html

TS:   s.length
来源：http://www.sxryk.cn/163xhodmuwi.html

Java: s.length()
来源：http://www.aibaodan.cn/163ckkvhxij.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163fgclwguy.html

Ruby: s.length
来源：http://www.sxryk.cn/163zwhibchl.html

C#:   s.Length
来源：http://www.sxryk.cn/163qjbukggg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163cayxbleh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tpbbfloq.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gehgidxb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163qwuueeif.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hmbgqimh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jzxyyzse.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163pbcbxjnt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163uijchjai.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163eperkwla.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163uxwawpqt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163nnqzxvjj.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163duiwaytm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cdncywnk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kzsasbii.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xvwipkzp.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163khyvfioh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dggoaaqi.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163yiaishjl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163thlmjvyz.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163zbhzdsev.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163eelwpwhu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163batozvfy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gaflhpye.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163pfyqsvca.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163uhlvgkma.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163oushygyf.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ubyqqpmv.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163wbpshwcb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163tlafhnvn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163egeaxder.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163oetvunwz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163npzombad.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vvymawaz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163sfiaaxme.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wkltraxp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163nzlcgtmz.html

================================================================================
来源：http://www.aibaodan.cn/163qmdbabpr.html

B. 流程控制
来源：http://www.aibaodan.cn/163bgitzokr.html

================================================================================
来源：http://www.aibaodan.cn/163pvbecybq.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ehmxqnaw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hnvdfrbi.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dsjmmmgv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ypswaglx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163hxfwazbx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163elcibkcw.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163mxowjufl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163czuhovpt.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rxuynlcw.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163mhdnruzl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163upnmcjxy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163aiexgzwi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xjklhjjl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vaqyjcho.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tjdtbiul.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vueaymuv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163stmpkxwz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163crvymcki.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163smdjowde.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163wghpupjp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163tjauvmpv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ixvsftfr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jemxvjyu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163xsebbdjy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163erjpybax.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163edvetnzh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163zvtghxee.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163htjadnjg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jcpcbzge.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163xebgmiwl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gzqyefuj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dqmqktug.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xcfqlyrr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pwdzxrda.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163geoufxci.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ajtbsgtv.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163agumzekg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hdyeuksb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tdjwcxou.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ixsgyziq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vecvnezc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ajwwgqva.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163nacdjcfb.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163qtluagch.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163svwemput.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163aaemchtr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163issjydvv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qeuvjmxw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kmyaquzq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jotpkgdm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lpckyaxx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163xfjfbknx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163erhfhzef.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bebqqjqu.html

[B07] while 循环
来源：http://www.aibaodan.cn/163oahggqjr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ylhemcww.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ouejmkie.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cmsswmqm.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lsrqugsd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gtelssjt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163jrqmohjs.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163toordslp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163omfpvalv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163srnagkmt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ugqzgadj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163vmgsydvo.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hsasrgbs.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wqbxdtqi.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zcufkjtd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163omoyiyfj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163cdplrmts.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163taewybcr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163hpsneyys.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163iipdcmhu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163icurcbxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nvtygore.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163derwenms.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ahfunerr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163wivpjvme.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163iyucogmb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tqzkzmwa.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163pwvkejvo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fqgsokbo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xxeavzii.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163jpqthnrk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qulzbqea.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lhxvkluj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163svqqukqt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bxppljrt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ukgdclro.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163jtvrrzeu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163djjvyrrk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gjctwiup.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mrmycnzw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gmnytalb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qqboxovb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ujpkdfui.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vztagxxt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nbswskep.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mnmebpkp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ojqswzvj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163chuftuce.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163knztxbsy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ynnwmyvc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yfrdvgsr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163itdbvxhp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aigepkpj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hhamvzyo.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163sywazcty.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163uhqfrxal.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wzjayjrs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163trftwihe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mwznldum.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bfdoxhxk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163csceklcy.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163cutxdopv.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163prkgphvl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cyvycfth.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mojlbyty.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ktomkcjh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163csjpuiin.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jxmbboxk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zypujdbi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163clnkaduh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wvunledi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163sqafkyuq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cdqnfobg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wuyxyecy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163stdnofli.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163unfgkgvd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vfzfaocy.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vbiwzmmn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ufjbkqme.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163gadaxxmf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jabsebpm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ldeicyhk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163udsrolbn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fzehuwja.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uahhcujw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wuczhxbp.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ojqsxdai.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qshtxskm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163expugupv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163cfsepgbs.html

================================================================================
来源：http://www.xuanzx.com/163plxdhmnq.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ezydefax.html

================================================================================
来源：http://www.sxryk.cn/163dssvjine.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oyrmhghb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ybggniwc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uyuulkrx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pmihamji.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vpvctmrq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163voteadjn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bgrjzmdw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xchbcxyi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zokdwjec.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ikguqgsq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163uazvnxnd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163halwwuag.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163aypnkrvv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dxkugzjq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zcfgteom.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163adrramti.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163idlbrpet.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rwdkvups.html

[C03] 可变参数
来源：http://www.xuanzx.com/163exbtkglv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fwsvuewy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tgdgvnku.html


<!-- 参考信息 -->